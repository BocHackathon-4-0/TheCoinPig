from django.contrib import admin
from .models import Goals

# Register your models here.
class GoalsAdmin(admin.ModelAdmin):
    list_display = ('title', 'target_balance', 'achieved')

admin.site.register(Goals, GoalsAdmin)
