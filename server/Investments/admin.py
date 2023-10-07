from django.contrib import admin
from .models import InvestmentProduct, NoticeProduct, Investment, NoticeInvestment

class InvestmentProductAdmin(admin.ModelAdmin):
    pass

class NoticeProductAdmin(admin.ModelAdmin):
    pass

class InvestmentAdmin(admin.ModelAdmin):
    pass

class NoticeInvestmentAdmin(admin.ModelAdmin):
    pass

admin.site.register(InvestmentProduct, InvestmentProductAdmin)
admin.site.register(NoticeProduct, NoticeProductAdmin)
admin.site.register(Investment, InvestmentAdmin)
admin.site.register(NoticeInvestment, NoticeInvestmentAdmin)
