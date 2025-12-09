from django.contrib import admin
from .models import CustomUser  # Assuming you have a CustomUser model

admin.site.register(CustomUser)  # Register the custom user model with the admin site