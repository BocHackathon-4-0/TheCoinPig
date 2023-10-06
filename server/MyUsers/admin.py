from django.contrib import admin
from .models import User, ParentUser, ChildUser

admin.site.register(User)
admin.site.register(ParentUser)
admin.site.register(ChildUser)