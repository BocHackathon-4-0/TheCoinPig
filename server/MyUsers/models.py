from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.

class User(AbstractUser):
    name = models.CharField(max_length=255)
    balance = models.FloatField(default=0)

    def __str__ (self):
        return self.name
    

class ParentUser(User):
    
    class Meta:
        verbose_name_plural = 'Parent Users'

class ChildUser(User):
    parent = models.ForeignKey(ParentUser, on_delete=models.CASCADE, related_name='children')
    completed_quests = models.ManyToManyField('Quests.Quest', blank=True, related_name='completed_quests')
    
    class Meta:
        verbose_name_plural = 'Children Users'

