from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken
from .models import Users
from rest_framework.permissions import AllowAny, IsAuthenticated
from .serializers import RegisterSerializer, UserSerializer
from django.contrib.auth.hashers import check_password

class RegisterView(APIView):
    def post(self, request):
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({
                'statusCode': status.HTTP_201_CREATED,
                'message': 'User registered successfully',
                'data': {
                    'id': serializer.data['id'],
                    'first_name': serializer.data['first_name'],
                    'last_name': serializer.data['last_name'],
                    'email': serializer.data['email']
                }
            }, status=status.HTTP_201_CREATED)
        return Response({
            'statusCode': status.HTTP_400_BAD_REQUEST,
            'message': 'Validation error',
            'data': serializer.errors
        }, status=status.HTTP_400_BAD_REQUEST)

class LoginView(APIView):
    permission_classes = [AllowAny]
    
    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')
        
        try:
            user = Users.objects.get(email=email)  # Manual check email
            
            if check_password(password, user.password):  # Manual check password
                refresh = RefreshToken.for_user(user)
                return Response({
                    'statusCode': status.HTTP_200_OK,
                    'message': 'User logged in successfully',
                    'data': {
                        'id': user.id,
                        'first_name': user.first_name,
                        'last_name': user.last_name,
                        'email': user.email,
                        'access': str(refresh.access_token),
                        'refresh': str(refresh)
                    }
                }, status=status.HTTP_200_OK)
            else:
                return Response({
                    'statusCode': status.HTTP_401_UNAUTHORIZED,
                    'message': 'Invalid credentials'
                }, status=status.HTTP_401_UNAUTHORIZED)
        
        except Users.DoesNotExist:
            return Response({
                'statusCode': status.HTTP_404_NOT_FOUND,
                'message': 'User not found'
            }, status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            return Response({
                'statusCode': status.HTTP_400_BAD_REQUEST,
                'message': 'An error occurred',
                'data': str(e)
            }, status=status.HTTP_400_BAD_REQUEST)

class GetUserByIdView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, user_id):
        try:
            user = Users.objects.get(id=user_id)
            serializer = UserSerializer(user)
            return Response({
                'statusCode': status.HTTP_200_OK,
                'message': 'User retrieved successfully',
                'data': serializer.data
            }, status=status.HTTP_200_OK)
        except Users.DoesNotExist:
            return Response({
                'statusCode': status.HTTP_404_NOT_FOUND,
                'message': 'User not found'
            }, status=status.HTTP_404_NOT_FOUND)

class LogoutView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
      try:
          refresh_token = request.data.get('refresh_token')
          
          if not refresh_token:
              return Response({
                  'statusCode': status.HTTP_400_BAD_REQUEST,
                  'message': 'Refresh token is required'
              }, status=status.HTTP_400_BAD_REQUEST)
          
          token = RefreshToken(refresh_token)  # Menginisialisasi refresh token dari request
          token.blacklist()  # Blacklist refresh token
          
          return Response({
              'statusCode': status.HTTP_200_OK,
              'message': 'Successfully logged out'
          }, status=status.HTTP_200_OK)
      
      except Exception as e:
          return Response({
              'statusCode': status.HTTP_400_BAD_REQUEST,
              'message': 'Logout error',
              'data': str(e)
          }, status=status.HTTP_400_BAD_REQUEST)