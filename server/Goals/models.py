from django.db import models

# Create your models here.
class Goals(models.Model):
    title = models.CharField(max_length=64)
    description = models.TextField()
    target_balance = models.FloatField(default=0)
    achieved = models.BooleanField(default=False)
    reward = models.FloatField(default=0)

    user = models.ForeignKey('MyUsers.ChildUser', on_delete=models.CASCADE, related_name='child_goals', null=True)
    

    def __str__(self):
        return self.title