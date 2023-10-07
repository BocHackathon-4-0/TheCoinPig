from django.shortcuts import render

# Create your views here.
# Create your views here.
from django.shortcuts import render

from django.http import JsonResponse
from rest_framework import status
from rest_framework.views import APIView
from .models import *
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from .serializers import InvestmentProductSerializer, InvestmentSerializer
from MyUsers.models import ChildUser
from .models import *


class getInvestments(APIView):
    def get(self, request):
        uid = request.query_params.get("uid")

        user = get_object_or_404(ChildUser, id=uid)

        user_investments = Investment.objects.filter(user=user)
        all_investment_products = InvestmentProduct.objects.all()
        investmentsList = []
        for product in all_investment_products:
            data = InvestmentProductSerializer(product).data
            if user_investments.filter(product=product, end_date__gt=datetime.now()).exists():
                data['currentInvestment'] = InvestmentSerializer(user_investments.get(product=product)).data
            investmentsList.append(data)


        return Response(investmentsList, status=status.HTTP_200_OK)
    
class createInvestment(APIView):
    def post(self, request):
        uid = request.data.get("uid")
        product_id = request.data.get("product_id")
        amount = request.data.get("amount")

        user = get_object_or_404(ChildUser, id=uid)
        product = get_object_or_404(InvestmentProduct, id=product_id)

        if user.balance < float(amount):
            return Response({"message": "Insufficient funds"}, status=status.HTTP_400_BAD_REQUEST)

        user.balance -= float(amount)
        user.save()

        investment = Investment.objects.create(user=user, product=product, start_amount=amount)
        investment.save()

        return Response({"message": "Investment created successfully"}, status=status.HTTP_200_OK)

