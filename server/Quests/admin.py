from django.contrib import admin
from .models import QuestCategory, Quiz, Answer, Question, Article, Quest

# Register your models here.


class QuizAdmin(admin.ModelAdmin):
    pass

class AnswerAdmin(admin.ModelAdmin):
    pass

class QuestionAdmin(admin.ModelAdmin):
    filter_horizontal = ('wrong_answers',)
    list_display = ('question', 'correct_answer',)

class ArticleAdmin(admin.ModelAdmin):
    pass

class QuestAdmin(admin.ModelAdmin):
    prepopulated_fields = {"slug": ("name",)}
    # filter_horizontal = ('investments_unlocks',)
    list_display = ('category', 'is_active',)

admin.site.register(QuestCategory)
admin.site.register(Quiz, QuizAdmin)
admin.site.register(Answer, AnswerAdmin)
admin.site.register(Question, QuestionAdmin)
admin.site.register(Article, ArticleAdmin)
admin.site.register(Quest, QuestAdmin)
