from django.db import models
from django.utils.text import slugify

# Create your models here.
class QuestCategory(models.Model):
    title = models.CharField(max_length=30)

    def __str__(self):
        return self.title


    
class Quiz(models.Model):
    name = models.CharField(max_length=64)
    questions = models.ManyToManyField('Question', blank=True)


    def __str__(self):
        return self.name



class Answer(models.Model):
    answer = models.CharField(max_length=255)

    def __str__(self):
        return self.answer

class Question(models.Model):
    question = models.CharField(max_length=255)
    wrong_answers = models.ManyToManyField(Answer, blank=True, related_name='wrong_answers')
    correct_answer = models.ForeignKey(Answer, on_delete=models.CASCADE, blank=True, null=True, related_name='correct_answer')

    def __str__(self):
        return self.question
    

class Article(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()

    def __str__(self):
        return self.title


class Quest(models.Model):
    name = models.CharField(max_length=30)
    description = models.TextField()
    category = models.ForeignKey(QuestCategory, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='quests', blank=True, null=True)
    slug = models.SlugField(max_length=30, unique=True, blank=True, null=True)
    investments_unlocks = models.ManyToManyField('Investments.InvestmentProduct', blank=True)
    article = models.ForeignKey(Article, on_delete=models.CASCADE, blank=True, null=True)
    quiz = models.ForeignKey(Quiz, on_delete=models.CASCADE, blank=True, null=True)
    reward = models.FloatField(default=0)
    order = models.IntegerField(blank=True, null=True, help_text="Leave Blank for auto increment in same category")

    is_active = models.BooleanField(default=True)

    def save(self, *args, **kwargs):
        if not self.pk:
            if not self.slug:
                self.slug = slugify(self.title)
                counter = 1
                temp_slug = self.slug
                while Quest.objects.filter(slug=temp_slug).exists():
                    temp_slug = self.slug + f"-{counter}"
                    counter += 1
                self.slug = temp_slug
        if not self.order:
            self.order = Quest.objects.filter(category=self.category).count() + 1
        super().save(*args, **kwargs)

    def __str__(self):
        return self.name