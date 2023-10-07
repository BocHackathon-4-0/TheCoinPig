
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
        fields = ['id', 'name', 'description', 'category', 'image', 'slug', 'article', 'quiz', 'reward', 'is_active', 'order']
    
class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = QuestCategory
        fields = ['id', 'title']

class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = ['id', 'title', 'description']

class QuizSerializer(serializers.ModelSerializer):
    class Meta:
        model = Quiz
        fields = ['id', 'name']


class AnswerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Answer
        fields = ['id', 'answer']

class QuestionSerializer(serializers.ModelSerializer):
    wrong_answers = AnswerSerializer(many=True)
    correct_answer = AnswerSerializer(many=False)
    class Meta:
        model = Question
        fields = ['id', 'question', 'correct_answer', 'wrong_answers']


