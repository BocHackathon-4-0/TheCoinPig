from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .api import *
@api_view(['GET'])
def get_account_statement(request):
    account_id = request.query_params.get("account_id")
    num_latest_transactions = request.query_params.get("num_latest_transactions", 6)
    access_token_obj = getAccessToken()
    if access_token_obj is type(int):
        return Response(access_token_obj)
    account_statement = getAccountStatement(access_token_obj, account_id, num_latest_transactions)

    return Response(account_statement)

@api_view(['GET'])
def get_account_balance(request):
    account_id = request.query_params.get("account_id")
    access_token_obj = getAccessToken()
    if access_token_obj is type(int):
        return Response(access_token_obj)
    account_balance = getAccountBalance(access_token_obj, account_id)
    return Response(account_balance[0]['balances'][0]['amount'])

@api_view(['GET'])
def get_access_token(request):
    access_token_obj = getAccessToken()
    return Response(access_token_obj.payload)



