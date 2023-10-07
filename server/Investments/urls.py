from django.contrib import admin
from django.urls import path
from Investments.views import (
    GetUnlockedInvestments,
)

urlpatterns = [
    path('get_unlocked_investments/', GetUnlockedInvestments.as_view()),
]