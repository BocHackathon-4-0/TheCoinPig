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
from .serializers import InvestmentProductSerializer, InvestmentSerializer, NoticeInvestmentSerializer, NoticeProductSerializer
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
            if NoticeProduct.objects.filter(product=product).exists():
                data = NoticeProductSerializer(product).data
                data['is_notice'] = True
            else:
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
        is_notice = False
        user = get_object_or_404(ChildUser, id=uid)
        product = get_object_or_404(InvestmentProduct, id=product_id)
        if NoticeProduct.objects.filter(product=product).exists():
            is_notice = True
        if user.balance < float(amount):
            return Response({"message": "Insufficient funds"}, status=status.HTTP_400_BAD_REQUEST)

        user.balance -= float(amount)
        user.save()

        if is_notice:
            investment = NoticeInvestment.objects.create(user=user, product=product, start_amount=amount)
        else:
            investment = Investment.objects.create(user=user, product=product, start_amount=amount)
        investment.save()

        return Response({"message": "Investment created successfully"}, status=status.HTTP_200_OK)

class giveNoticeWithdraw(APIView):
    def post(self, request):
        investment_id = request.data.get("investment_id")
        amount = request.data.get("amount")

        investment = get_object_or_404(NoticeInvestment, id=investment_id)

        investment.NoticeWithdraw(amount)

        return Response({"message": "Notice given successfully"}, status=status.HTTP_200_OK)

class withdrawInvestment(APIView):
    def post(self, request):
        investment_id = request.data.get("investment_id")
        amount = request.data.get("amount")

        investment = get_object_or_404(Investment, id=investment_id)
        if NoticeInvestment.objects.filter(id=investment_id).exists():
            investment = get_object_or_404(NoticeInvestment, id=investment_id)
        # investment = get_objects(NoticeInvestment, id=investment_id, investment)

        investment.withdraw(amount)

        return Response({"message": "Withdrawn successfully"}, status=status.HTTP_200_OK)

class depositInvestment(APIView):
    def post(self, request):
        investment_id = request.data.get("investment_id")
        amount = request.data.get("amount")

        investment = get_object_or_404(Investment, id=investment_id)

        investment.deposit(amount)

        return Response({"message": "Deposited successfully"}, status=status.HTTP_200_OK)