from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
from .models import *


def index(request):
    return render(request, 'milo_webpage/index.html')


def create(request):
    shapes = Leafs_Shape.objects.all()
    counts = Leafs_Count.objects.all()
    colors = Coloration.objects.all()
    etchings = Etching.objects.all()
    return render(request, 'milo_webpage/shop.html', context={'shapes': shapes, 'counts': counts,
                                                              'colors': colors, 'etchings': etchings})


# shapes = Leafs_Shape.objects.all()
