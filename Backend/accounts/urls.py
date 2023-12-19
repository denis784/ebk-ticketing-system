# accounts/urls.py
from django.urls import path
from .views import CustomUserCreateView, CustomUserLoginView, CustomUserLogoutView

urlpatterns = [
    path('signup/', CustomUserCreateView.as_view(), name='user_signup'),
    path('login/', CustomUserLoginView.as_view(), name='user_login'),
    path('logout/', CustomUserLogoutView.as_view(), name='user_logout'),
]
