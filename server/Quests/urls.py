from django.contrib import admin
from django.urls import path
from Quests.views import (
    GetQuests,
    GetQuestsByCategory,
    GetCategories,
    GetArticles,
    GetQuestQuiz,
    GetQuestRelatedArticle,
    
)

urlpatterns = [
    path('get_quests/', GetQuests.as_view()),
    path('get_quests_categories/', GetCategories.as_view()),
    path('get_quests_article/', GetArticles.as_view()),
    path('get_quest_quiz/', GetQuestQuiz.as_view()),
    path('get_quests_by_category/', GetQuestsByCategory.as_view()),
    path('get_quest_article/', GetQuestRelatedArticle.as_view()),


]