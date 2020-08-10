from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
from .models import Leafs_Shape


def index(request):
    return render(request, 'milo_webpage/index.html')


def create(request):
    shapes = Leafs_Shape.objects.all()
    return render(request, 'milo_webpage/shop.html', context={'shapes': shapes})


shapes = Leafs_Shape.objects.all()
