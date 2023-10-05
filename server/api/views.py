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
import json

class encodedTest(APIView):
    def get(self, request):
        # Data to be encoded into JSON
        data = {'key1': 'value1', 'key2': 'value2'}

        # Encode the data into JSON format
        encoded_data = json.dumps(data)

        # Set the Content-Type header to indicate JSON encoding
        response = JsonResponse(encoded_data, content_type='application/json')

        return response