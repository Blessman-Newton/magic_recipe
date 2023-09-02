from djoser.serializers import UserCreateSerializer
from django.contrib.auth import  get_user_model
from rest_framework import serializers
from .models import RecentItems
User = get_user_model()

class UserCreateSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = User
        fields = ('id', 'email', 'name', 'password')
        

class RecipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = RecentItems
        fields = '__all__'
        