from django.contrib import admin
from django.urls import path
from MyUsers.views import (
    CheckUserCredentials
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('validate_user/', CheckUserCredentials.as_view()),
]