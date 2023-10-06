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
    
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Person
from .serializers import PersonSerializer

@api_view(['POST'])
def create_person(request):
    if request.method == 'POST':
        serializer = PersonSerializer(data=request.data)
        if serializer.is_valid():
            # Save the person object with the provided name
            name = serializer.validated_data.get('name')
            person = Person(name=name)
            person.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
