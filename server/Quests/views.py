from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import status
from django.http import JsonResponse
from rest_framework.views import APIView
from .serializers import QuestSerializer

from MyUsers.models import (
    ChildUser
)

from .models import (
    Quest,
)

class GetQuests(APIView):

    def serialize_quests(self, quests):
        quest_serializer = QuestSerializer(quests, many=True)
        serialized_data = []
        for quest in quest_serializer.data:
            quest_quiz = quest['quiz']
            quest_article = quest['article']
            quest_category = quest['category']

            quest_data = {
                "quest_id": quest['id'],
                "quest_name": quest['name'],
                "quest_slug": quest['slug'],
                "quest_description": quest['description'],
                "quest_category": quest_category,
                "quest_article": quest_article,
                "quest_quiz": quest_quiz,
                "quest_image": quest['image'],
            }
            serialized_data.append(quest_data)
        return serialized_data

    def get(self, request):
        try:
            user_id = request.query_params.get("user_id")
            child = ChildUser.objects.get(id=user_id)

            completed_quests = child.completed_quests.all()
            quests_not_completed = Quest.objects.exclude(id__in=child.completed_quests.all())

            quest_completed = self.serialize_quests(completed_quests)
            quest_not_completed = self.serialize_quests(quests_not_completed)

            data = {
                "completed_quests": quest_completed,
                "quests_not_completed": quest_not_completed
            }
                
            status_code = status.HTTP_200_OK
            return Response(data, status=status_code)
        except ChildUser.DoesNotExist:
            status_code = status.HTTP_404_NOT_FOUND
            return Response({"error": "User not found"}, status=status_code)
        except Exception as e:
            status_code = status.HTTP_400_BAD_REQUEST
            return Response({"error": str(e)}, status=status_code)
    
class GetQuestsByCategory(APIView):
    pass


class GetQuestRelatedArticle(APIView):
    pass


class GetQuestRelatedQuiz(APIView):
    pass


