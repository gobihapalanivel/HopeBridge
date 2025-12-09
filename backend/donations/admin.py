from django.contrib import admin
from .models import Donation

@admin.register(Donation)
class DonationAdmin(admin.ModelAdmin):
    list_display = ('donor_name', 'amount', 'date', 'message')
    search_fields = ('donor_name', 'message')
    list_filter = ('date',)
    ordering = ('-date',)