from rest_framework import serializers
from .models import Users
from django.contrib.auth.hashers import make_password

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True, error_messages={
        'blank': 'Password cannot be empty',
    })
    email = serializers.EmailField(required=True, error_messages={
        'blank': 'Email cannot be empty',
    })

    class Meta:
        model = Users
        fields = ('id', 'first_name', 'last_name', 'email', 'password')

    def validate_email(self, value):
        # Check if email already exists
        if Users.objects.filter(email=value).exists():
            raise serializers.ValidationError("Email already in use")
        return value

    def create(self, validated_data):
        validated_data['password'] = make_password(validated_data['password'])  # Hash password
        return super().create(validated_data)
class LoginSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True, error_messages={
        'blank': 'Password cannot be empty',
    })
    email = serializers.EmailField(required=True, error_messages={
        'blank': 'Email cannot be empty',
    })
    class Meta:
        model = Users
        fields = ('email', 'password')



class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = ('id', 'first_name', 'last_name', 'email')