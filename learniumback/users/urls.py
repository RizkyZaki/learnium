from django.urls import path
from .views import RegisterView, LoginView, GetUserByIdView, LogoutView

urlpatterns = [
    path('register', RegisterView.as_view(), name='register'),
    path('login', LoginView.as_view(), name='login'),
    path('users/<int:user_id>', GetUserByIdView.as_view(), name='get_user_by_id'),
    path('logout', LogoutView.as_view(), name='logout'),
]
