from django.shortcuts import render
from rest_framework import viewsets
from .models import RecentItems
from .serializers import PostSerializer

class PostViewSet(viewsets.ModelViewSet):
    queryset = RecentItems.objects.all()
    serializer_class = RecipeSerializer
