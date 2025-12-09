from django.urls import path
from . import views

urlpatterns = [
    path('donate/', views.donate, name='donate'),
    path('donations/', views.donation_list, name='donation_list'),
    path('donation/<int:id>/', views.donation_detail, name='donation_detail'),
]