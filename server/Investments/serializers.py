from rest_framework import serializers
from .models import *

class InvestmentProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = InvestmentProduct
        fields = '__all__'

class InvestmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Investment
        fields = '__all__'

class NoticeInvestmentSerializer(serializers.ModelSerializer): 
    class Meta:
        model = NoticeInvestment
        fields = '__all__'

class NoticeProductSerializer(serializers.ModelSerializer): 
    class Meta:
        model = NoticeProduct
        fields = '__all__'


