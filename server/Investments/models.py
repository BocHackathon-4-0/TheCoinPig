from django.db import models
import random
from django.core.exceptions import ValidationError
from django.core.validators import MaxValueValidator, MinValueValidator

# Create your models here.
class InvestmentProduct(models.Model):
    name = models.CharField(max_length=64)
    description = models.TextField()
    image = models.ImageField(upload_to='investments', blank=True, null=True)
    success_rate = models.SmallIntegerField(default=0, validators=[MaxValueValidator(limit_value=100), MinValueValidator(limit_value=0)])
    neutral_rate = models.SmallIntegerField(default=0, validators=[MaxValueValidator(limit_value=100), MinValueValidator(limit_value=0)])
    failure_rate = models.SmallIntegerField(default=0, validators=[MaxValueValidator(limit_value=100), MinValueValidator(limit_value=0)])
    profit_yield = models.FloatField(default=0)
    loss_yield = models.FloatField(default=0)
    frequency = models.DurationField()

    def clean(self):
        total_rate = self.success_rate + self.neutral_rate + self.failure_rate
        if total_rate != 100:
            raise ValidationError("The sum of success_rate, neutral_rate, and failure_rate must be 100.")

    def save(self, *args, **kwargs):
        self.full_clean()  # Validate before saving
        super().save(*args, **kwargs)
    def __str__(self):
        return self.name
    
class Investment(models.Model):
    user = models.ForeignKey('MyUsers.ChildUser', on_delete=models.CASCADE, related_name='investments')
    product = models.ForeignKey(InvestmentProduct, on_delete=models.CASCADE, related_name='investments')
    start_amount = models.FloatField(default=0)
    reward = models.FloatField()
    start_date = models.DateTimeField(auto_now_add=True)
    end_date = models.DateTimeField(blank=True, null=True)

    def save(self, *args, **kwargs):
        if not self.pk:
            self.end_date = self.start_date + self.product.frequency
            outcome_options = ['Success', 'Neutral', 'Fail']
            probabilities = [self.product.success_rate/100, self.product.neutral_rate/100, self.product.failure_rate/100]

            outcome = random.choices(outcome_options, probabilities, k=1)[0]   
            if outcome == "Success":
                self.reward = self.start_amount * self.product.profit_yield
            elif outcome == "Neutral":
                self.reward = self.start_amount
            elif outcome == "Fail":
                self.reward = -(self.start_amount * self.product.loss_yield)
        super().save(*args, **kwargs)

    def __str__(self):
        return f'{self.user} - {self.product}'