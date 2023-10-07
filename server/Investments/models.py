from django.db import models

# Create your models here.
class InvestmentProduct(models.Model):
    name = models.CharField(max_length=64)
    description = models.TextField()
    image = models.ImageField(upload_to='investments', blank=True, null=True)
    success_rate = models.IntegerField(default=0)
    neutral_rate = models.IntegerField(default=0)
    failure_rate = models.IntegerField(default=0)
    profit_yield = models.FloatField(default=0)
    loss_yield = models.FloatField(default=0)
    frequency = models.DurationField()

    def __str__(self):
        return self.name
    
class Investment(models.Model):
    user = models.ForeignKey('MyUsers.ChildUser', on_delete=models.CASCADE, related_name='investments')
    product = models.ForeignKey(InvestmentProduct, on_delete=models.CASCADE, related_name='investments')
    start_amount = models.FloatField(default=0)
    end_amount = models.FloatField()
    start_date = models.DateTimeField(auto_now_add=True)
    end_date = models.DateTimeField(blank=True, null=True)

    def save(self, *args, **kwargs):
        if not self.pk:
            self.end_date = self.start_date + self.product.frequency
            #todo calculate end amount
        super().save(*args, **kwargs)

    def __str__(self):
        return f'{self.user} - {self.product}'