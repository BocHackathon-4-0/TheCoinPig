import asyncio
from django.db import models
import random
from django.core.exceptions import ValidationError
from django.core.validators import MaxValueValidator, MinValueValidator
from datetime import datetime, timedelta

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
        self.full_clean()
        super().save(*args, **kwargs)
    
    def __str__(self):
        return self.name

class NoticeProduct(InvestmentProduct):
    penalty = models.FloatField(default=20)
    notice_duration = models.DurationField(help_text="The duration you need to wait after giving a notice")


class Investment(models.Model):
    user = models.ForeignKey('MyUsers.ChildUser', on_delete=models.CASCADE, related_name='investments')
    product = models.ForeignKey(InvestmentProduct, on_delete=models.CASCADE, related_name='investments')
    start_amount = models.FloatField(default=0)
    reward = models.FloatField(blank=True, null=True)
    start_date = models.DateTimeField(default=datetime.now)
    end_date = models.DateTimeField(blank=True, null=True)

    def caluclateReward(self):
        outcome_options = ['Success', 'Neutral', 'Fail']
        probabilities = [self.product.success_rate/100, self.product.neutral_rate/100, self.product.failure_rate/100]

        outcome = random.choices(outcome_options, probabilities, k=1)[0]   
        if outcome == "Success":
            self.reward = self.start_amount * self.product.profit_yield
        elif outcome == "Neutral":
            self.reward = self.start_amount
        elif outcome == "Fail":
            self.reward = -(self.start_amount * self.product.loss_yield)

    def withdraw(self, amount):
        if float(amount) > self.start_amount:
            raise ValidationError("Amount to withdraw is greater than available balance")
        self.start_amount -= float(amount)
        self.caluclateReward()
        self.save()
        self.user.balance += float(amount)
        self.user.save()
    
    def deposit(self, amount):
        if float(amount) > self.user.balance:
            raise ValidationError("Amount to deposit is greater than available balance")
        self.start_amount += float(amount)
        self.caluclateReward()
        self.save()
        self.user.balance -= float(amount)
        self.user.save()

    def reward_distribution(self):
        self.user.balance += self.start_amount + self.reward
        if self.user.parent.balance >= self.reward:
            self.user.parent.balance -= self.reward
            self.user.parent.save()
        self.user.save()
            

    def save(self, *args, **kwargs):
        if not self.pk:
            self.end_date = self.start_date + self.product.frequency
            self.caluclateReward()
            
        super().save(*args, **kwargs)

    def __str__(self):
        return f'{self.user} - {self.product}'

class NoticeInvestment(Investment):

    notice_settlement_date = models.DateTimeField(blank=True, null=True)
    notice_sent = models.BooleanField(default=False)
    pending_withdraw_balance = models.FloatField(default=0, null=True, blank=True)

    def withdraw(self, amount):
        super().withdraw(amount)
        try:
            self.user.balance -= self.product.penalty
            self.user.save()
        except:
            print("Error on withdraw on notice penalty fee")
    

    def NoticeWithdraw(self, amount):
        if float(amount) > self.start_amount:
            raise ValidationError("Amount to withdraw is greater than available balance")
        if self.notice_sent:
            raise ValidationError("Notice already sent")
        
        self.start_amount -= float(amount)
        self.caluclateReward()

        self.pending_withdraw_balance += float(amount)
        self.notice_given = True
        self.save()

        asyncio.run(self.execute_after_delay(self, amount, (self.notice_settlement_date - datetime.now()).total_seconds()))
    
    async def execute_after_delay(self, amount, delay_seconds):
        await asyncio.sleep(delay_seconds)
        print("Executing NoticeWithdraw function.")
        self.pending_withdraw_balance -= float(amount)
        self.user.balance += float(amount)
        self.notice_given = False
        self.user.save()
        self.save()



    def save(self, *args, **kwargs):
        if self.pk and self.notice_sent and NoticeInvestment.objects.get(pk=self.pk).notice_sent == False:
            self.notice_settlement_date = datetime.now() + self.product.notice_duration if datetime.now() + self.product.notice_duration < self.end_date else  self.end_date
        super().save(self, *args, **kwargs)

    def __str__(self):
        return f'{self.user} - {self.product}'
    

