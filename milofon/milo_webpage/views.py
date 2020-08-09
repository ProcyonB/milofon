from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
from .models import Leafs_Shape


def index(request):
    shapes = Leafs_Shape.objects.all()
    return render(request, 'milo_webpage/index.html', context={'shapes': shapes})


def create(request):
    return render(request, 'milo_webpage/shop.html')
