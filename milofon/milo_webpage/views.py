from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
from .models import *


def index(request):
    if request == 'POST':
        name = request.POST['name']
        email = request.POST['email']
        message = request.POST['message']
        print(name, email, message)
        return HttpResponse('ok')
    else:
        return render(request, 'milo_webpage/index.html')


def form_funс(request):
    if request.method == 'POST':
        print('here')
        name = request.POST.get('name')
        email = request.POST.get('email')
        message = request.POST.get('message')
        print(name, email, message)
        if True:
            return HttpResponse('no')
        else:
            return HttpResponse('yep')
    else:
        return HttpResponse('не ok')


def create(request):
    shapes = Leafs_Shape.objects.all()
    counts = Leafs_Count.objects.all()
    colors = Coloration.objects.all()
    etchings = Etching.objects.all()
    return render(request, 'milo_webpage/shop.html', context={'shapes': shapes, 'counts': counts,
                                                              'colors': colors, 'etchings': etchings})


# shapes = Leafs_Shape.objects.all()
