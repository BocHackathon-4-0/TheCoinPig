from django.contrib import admin
from django.urls import path
from MyUsers.views import (
    CheckUserCredentials
)

urlpatterns = [
    path('validate_user/', CheckUserCredentials.as_view()),
]