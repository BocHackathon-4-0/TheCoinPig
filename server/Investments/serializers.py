from rest_framework import serializers
from .models import *
from server.utils import duration_to_readable

class InvestmentProductSerializer(serializers.ModelSerializer):
    frequency_readable = serializers.SerializerMethodField()

    def get_frequency_readable(self, obj):
        return duration_to_readable(obj.frequency)
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
    frequency_readable = serializers.SerializerMethodField()


    def get_frequency_readable(self, obj):
        return duration_to_readable(obj.frequency)
    class Meta:
        model = NoticeProduct
        fields = '__all__'


