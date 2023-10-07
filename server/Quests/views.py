from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import status
from django.http import JsonResponse
from rest_framework.views import APIView

from .serializers import (
    QuestSerializer,
    CategorySerializer,
    ArticleSerializer,
    QuizSerializer,
    AnswerSerializer,
    QuestionSerializer,
)

from MyUsers.models import (
    ChildUser
)

from .models import (
    Quest,
    QuestCategory,
    Article,
    Quiz,
    Question,
    Answer,

)

def serialize_quests(quests):
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


class GetQuests(APIView):
    def get(self, request):
        try:
            user_id = request.query_params.get("user_id")
            child = ChildUser.objects.get(id=user_id)

            completed_quests = child.completed_quests.all()
            quests_not_completed = Quest.objects.exclude(id__in=child.completed_quests.all())

            quest_completed = serialize_quests(completed_quests)
            quest_not_completed = serialize_quests(quests_not_completed)

            data = {
                "completed_quests": quest_completed,
                "not_completed_quests": quest_not_completed
            }
                
            status_code = status.HTTP_200_OK
            return Response(data, status=status_code)
        except ChildUser.DoesNotExist:
            status_code = status.HTTP_404_NOT_FOUND
            return Response({"error": "User not found"}, status=status_code)
        except Exception as e:
            status_code = status.HTTP_400_BAD_REQUEST
            return Response({"error": str(e)}, status=status_code)


class GetCategories(APIView):
    def get(self, request):
        try:
            categories = CategorySerializer(QuestCategory.objects.all(), many=True).data
            data = {
                "categories": categories
            }
            status_code = status.HTTP_200_OK
            return Response(data, status=status_code)
        except Exception as e:
            status_code = status.HTTP_400_BAD_REQUEST
            return Response({"error": str(e)}, status=status_code)


class GetArticles(APIView):
    def get(self, request):
        try:
            articles = ArticleSerializer(Article.objects.all(), many=True).data
            data = {
                "articles": articles
            }
            status_code = status.HTTP_200_OK
            return Response(data, status=status_code)
        except Exception as e:
            status_code = status.HTTP_400_BAD_REQUEST
            return Response({"error": str(e)}, status=status_code)


class GetQuestQuiz(APIView):
    def get(self, request):
        try:
            quest_id = request.query_params.get("quest_id")
            quest = Quest.objects.get(id=quest_id)
            quiz = QuizSerializer(quest.quiz).data
            questions = QuestionSerializer(quest.quiz.questions.all(), many=True).data


            serialized_data = []
            for question in questions:
                
                answers = AnswerSerializer(question['wrong_answers'], many=True).data
                correct_answer = AnswerSerializer(question['correct_answer']).data

                data = {
                    "question_id": question['id'],
                    "question": question['question'],
                    "answers": answers,
                    "correct_answer": correct_answer
                }
                serialized_data.append(data)
            
            data = {
                "quiz": quiz,
                "questions": serialized_data
            }
            status_code = status.HTTP_200_OK
            return Response(data, status=status_code)
        except Quest.DoesNotExist:
            status_code = status.HTTP_404_NOT_FOUND
            return Response({"error": "Quest not found"}, status=status_code)
        except Exception as e:
            status_code = status.HTTP_400_BAD_REQUEST
            return Response({"error": str(e)}, status=status_code)


class GetQuestsByCategory(APIView):
    def get(self, request):
        try:
            category_id = request.query_params.get("category_id")
            quests = Quest.objects.filter(category=category_id)
            serialized_data = serialize_quests(quests)
            data = {
                "quests": serialized_data
            }
            status_code = status.HTTP_200_OK
            return Response(data, status=status_code)
        except Exception as e:
            status_code = status.HTTP_400_BAD_REQUEST
            return Response({"error": str(e)}, status=status_code)


class GetQuestRelatedArticle(APIView):
    def get(self, request):
        try:
            quest_id = request.query_params.get("quest_id")
            quest = Quest.objects.get(id=quest_id)
            article = ArticleSerializer(quest.article).data
            data = {
                "article": article
            }
            status_code = status.HTTP_200_OK
            return Response(data, status=status_code)
        except Quest.DoesNotExist:
            status_code = status.HTTP_404_NOT_FOUND
            return Response({"error": "Quest not found"}, status=status_code)
        except Exception as e:
            status_code = status.HTTP_400_BAD_REQUEST
            return Response({"error": str(e)}, status=status_code)

