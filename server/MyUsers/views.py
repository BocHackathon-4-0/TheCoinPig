from django.shortcuts import render

from django.http import JsonResponse
from rest_framework import status
from rest_framework.views import APIView
from .models import User, ParentUser, ChildUser
from rest_framework.response import Response


class CheckUserCredentials(APIView):
    def get(self, request):
        
        username = request.headers.get("username")
        password = request.headers.get("password")

        user = User.objects.all()

        if user.filter(username=username, password=password).exists():

            curr_user = user.filter(username=username, password=password)

            user_id = curr_user.get().id
            balance = curr_user.get().balance

            data = {
                "message": "User exists",
                "user_id": user_id,
                "balance": balance
            }

            status_code = status.HTTP_200_OK
            return Response(data, status=status_code)
        else: 
            data = {
                "message": "User does not exist"
            }
            status_code = status.HTTP_404_NOT_FOUND
            return Response(data, status=status_code)
    