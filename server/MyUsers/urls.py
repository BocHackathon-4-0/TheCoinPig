from django.contrib import admin
from django.urls import path
from MyUsers.views import (
    CheckUserCredentials,
    GetBalances,
)

urlpatterns = [
    path('validate_user/', CheckUserCredentials.as_view()),
    path('get_balances/', GetBalances.as_view()),
]