
from rest_framework import serializers
from .models import (
    Quest, 
    QuestCategory, 
    Quiz, 
    Question, 
    Answer, 
    Article
)

class QuestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Quest
        fields = ['id', 'name', 'description', 'category', 'image', 'slug', 'article', 'quiz', 'reward', 'is_active']
    
    
