from django.contrib import admin
from django.urls import path
from Quests.views import (
    GetQuests,
)

urlpatterns = [
    path('get_quests/', GetQuests.as_view()),
]