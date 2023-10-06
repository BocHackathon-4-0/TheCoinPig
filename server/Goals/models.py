from django.db import models

# Create your models here.
class Goals(models.Model):
    title = models.CharField(max_length=64)
    description = models.TextField()
    target_balance = models.FloatField()
    achieved = models.BooleanField(default=False)
    

    def __str__(self):
        return self.title