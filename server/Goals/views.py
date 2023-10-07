from django.shortcuts import render

# Create your views here.
from django.shortcuts import render

from django.http import JsonResponse
from rest_framework import status
from rest_framework.views import APIView
from .models import Goals
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from .serializers import GoalsSerializer
from MyUsers.models import ChildUser


class GetGoals(APIView):
    def get(self, request):
        uid = request.query_params.get("uid")

        user = get_object_or_404(ChildUser, id=uid)

        user_goals = Goals.objects.filter(user=user)

        serializer = GoalsSerializer(user_goals, many=True)

        return Response(serializer.data, status=status.HTTP_200_OK)
    

class CreateGoal(APIView):
    def post(self, request):
        user = get_object_or_404(ChildUser, id = request.data.get('uid'))
        serializer = GoalsSerializer(data=request.data)
        if serializer.is_valid():
            # Save the Goal object with the provided name
            title = serializer.validated_data.get('title')
            description = serializer.validated_data.get('description')
            target_balance = serializer.validated_data.get('target_balance')
            Goal = Goals(title=title, description=description, target_balance=target_balance, user=user)
            Goal.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class AddBalance(APIView):
    def post(self, request):
        goal = get_object_or_404(Goals, id = request.data.get('goal_id'))
        goal.current_balance += request.data.get('amount')
        goal.save()
        return Response(status=status.HTTP_200_OK)

class WithdrawBalance(APIView):
    def post(self, request):
        goal = get_object_or_404(Goals, id = request.data.get('goal_id'))
        goal.current_balance -= request.data.get('amount')
        goal.save()
        return Response(status=status.HTTP_200_OK)

class DeleteGoal(APIView):
    def post(self, request):
        goal = get_object_or_404(Goals, id = request.data.get('goal_id'))
        goal.delete()
        return Response(status=status.HTTP_200_OK)

class GetGoal(APIView):
    def get(self, request):
        goal = get_object_or_404(Goals, id = request.query_params.get('goal_id'))
        serializer = GoalsSerializer(goal)
        return Response(serializer.data, status=status.HTTP_200_OK)

class UpdateGoal(APIView):
    def post(self, request):
        goal = get_object_or_404(Goals, id = request.data.get('goal_id'))
        goal.title = request.data.get('title')
        goal.description = request.data.get('description')
        goal.target_balance = request.data.get('target_balance')
        goal.save()
        return Response(status=status.HTTP_200_OK)
