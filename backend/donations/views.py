from django.shortcuts import render
from django.http import JsonResponse
from .models import Donation
from rest_framework.decorators import api_view
from .serializers import DonationSerializer

@api_view(['GET'])
def donation_list(request):
    donations = Donation.objects.all()
    serializer = DonationSerializer(donations, many=True)
    return JsonResponse(serializer.data, safe=False)

@api_view(['POST'])
def create_donation(request):
    serializer = DonationSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return JsonResponse(serializer.data, status=201)
    return JsonResponse(serializer.errors, status=400)