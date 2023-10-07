from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import status
from django.http import JsonResponse
from rest_framework.views import APIView

from .serializers import (
    InvestmentProductSerializer,
)

from .models import (
    InvestmentProduct,
)

from MyUsers.models import ChildUser

class GetUnlockedInvestments(APIView):
    def get(self, request):
        try:
            user_id = request.query_params.get('user_id')
            user =  ChildUser.objects.get(id=user_id)
            investment_products = InvestmentProduct.objects.all()
            
            unlocked_investments = []
            for product in investment_products:
                for quest in user.completed_quests.all():
                    if product in quest.investments_unlocks.all():
                        unlocked_investments.append(product)
            
            unlocked_investments = InvestmentProductSerializer(unlocked_investments, many=True).data
            return Response(unlocked_investments, status=status.HTTP_200_OK)

        except Exception as e:
            return JsonResponse({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)
