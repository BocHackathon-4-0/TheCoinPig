from django.contrib import admin
from django.urls import path
from .views import *
from Investments.views import (
    GetUnlockedInvestments,
)

urlpatterns = [
    path('get_unlocked_investments/', GetUnlockedInvestments.as_view()),
    path('getInvestments/', getInvestments.as_view()),
    path('createInvestment/', createInvestment.as_view()),
    path('giveNoticeWithdraw/', giveNoticeWithdraw.as_view()),
    path('withdrawInvestment/', withdrawInvestment.as_view()),
    path('depositInvestment/', depositInvestment.as_view()),
]
