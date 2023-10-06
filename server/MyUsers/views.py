from django.shortcuts import render

from django.http import JsonResponse
from rest_framework import status
from rest_framework.views import APIView
from .models import User, ParentUser, ChildUser
from rest_framework.response import Response

class CheckUserCredentials(APIView):
    def get(self, request):


        # username = request.data['username']
        # password = request.data['password']
        
        user = User.objects.get(username=username)

        if user.filter(username=username, password=password).exists():

            data = {
                "message": "User exists, device registered"
            }

            # users.filter(username=username, password=password).update(device_id=device_id)
            status_code = status.HTTP_200_OK
            return Response(data, status=status_code)
        else: 
            data = {
                "message": "User does not exist, device not registered"
            }
            status_code = status.HTTP_404_NOT_FOUND
            return Response(data, status=status_code)
        # try:
       
        # except:
        #     data = {
        #         "message": "User does not exist, device not registered"
        #     }
        #     status_code = status.HTTP_404_NOT_FOUND
        #     return Response(data, status=status_code)

       
        # return JsonResponse(response_data)