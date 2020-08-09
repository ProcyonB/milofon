from django.contrib import admin
from django.urls import path

from .views import*

urlpatterns = [
    path('', index, name='main_page_url'),
    path('/create', create, name='create_page_url')
]
