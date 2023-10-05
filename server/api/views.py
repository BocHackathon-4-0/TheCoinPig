from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view

# Create your views here.
@api_view(['GET'])
def test(request):
    return Response({'message': 'EN TO API MOU'})

from urllib.parse import urlencode

from django.http import JsonResponse
from rest_framework.views import APIView

class encodedTest(APIView):
    def get(self, request):
        # Data to be URL-encoded (a dictionary of key-value pairs)
        data = {'param1': 'value1', 'param2': 'value2'}

        # URL-encode the data
        encoded_data = urlencode(data)

        # Create a response with the encoded data
        response_data = {
            'encoded_data': encoded_data
        }

        return JsonResponse(response_data)