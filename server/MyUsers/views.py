from django.shortcuts import get_object_or_404, render

from django.http import JsonResponse
from rest_framework import status
from rest_framework.views import APIView
from .models import User, ParentUser, ChildUser
from rest_framework.response import Response
from api.api import getAccountBalance, getAccessToken
from Goals.models import Goals
from Investments.models import Investment


class CheckUserCredentials(APIView):
    def get(self, request):
        
        username = request.query_params.get("username")
        password = request.query_params.get("password")

        user = User.objects.all()

        if user.filter(username=username, password=password).exists():

            curr_user = user.filter(username=username, password=password)

            user_id = curr_user.get().id

            data = {
                "message": "User exists",
                "user_id": user_id,
                "permission": "parent" if curr_user.get().is_parent else "child"
            }

            status_code = status.HTTP_200_OK
            return Response(data, status=status_code)
        else: 
            
            status_code = status.HTTP_404_NOT_FOUND
            return Response({"error": "User not found"}, status=status_code)
        

class GetBalances(APIView):
    def get(self, request):
        user_id = request.query_params.get("user_id")
        user = get_object_or_404(User, id=user_id)
        access_token_obj = getAccessToken()
        if access_token_obj is type(int):
            return Response(access_token_obj)
        balance = getAccountBalance(access_token_obj, user.account_id)[0]['balances'][0]['amount']

        user.balance = balance
        user.save()
        goals_balance = 0
        for goal in Goals.objects.filter(user=user):
            goals_balance += goal.current_balance
        investment_balance = 0
        for investment in Investment.objects.filter(user=user):
            investment_balance += investment.start_amount
        liquid_balance = balance - goals_balance - investment_balance
        data = {
            "balance": balance,
            "liquid_balance": liquid_balance
        }
        return Response(data, status=status.HTTP_200_OK)

        