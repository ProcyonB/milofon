from django.contrib import admin
from django.urls import path

from .views import*

urlpatterns = [
    path('', index, name='main_page_url'),
    path('create', create, name='create_page_url'),
    path('form', form_funс, name='form_first'),
    path('form_shop', form__shop, name='form_second'),
]
