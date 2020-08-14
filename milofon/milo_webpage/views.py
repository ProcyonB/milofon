from django.shortcuts import render
from django.http import HttpResponse
from django.core.mail import send_mail
from django.core.mail import EmailMessage
# from ..milofon.settings import EMAIL_HOST_USER

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
        sent = False
        name = request.POST.get('name')
        email = request.POST.get('email')
        comment = request.POST.get('message')
        message = (f"Имя: {name} \nEmail:{email} \nСообщение: {comment}")
        print(message)

        send_mail("Сообщение с сайта", "message", None,
                  ['iampauline@mail.ru'], fail_silently=False)

        sent = True
        if sent:
            return HttpResponse('yes')
        else:
            return HttpResponse('no')
    else:
        return HttpResponse('no')


def create(request):
    shapes = Leafs_Shape.objects.all()
    counts = Leafs_Count.objects.all()
    colors = Coloration.objects.all()
    etchings = Etching.objects.all()
    return render(request, 'milo_webpage/shop.html', context={'shapes': shapes, 'counts': counts,
                                                              'colors': colors, 'etchings': etchings})


def form__shop(request):
    if request.method == 'POST':
        print("here!!!!!!!!!!!!!")
        sent = False
        drum__size = request.POST.get('drum__size')
        drum__leafs_count = request.POST.get('drum__leafs_count')
        drum__shape = request.POST.get('drum__shape')
        drum__color = request.POST.get('drum__color')
        drum__etching = request.POST.get('drum__etching')
        drum__bag = request.POST.get('drum__bag')
        drum__sticks = request.POST.get('drum__sticks')
        size__price = request.POST.get('size__price')
        leafs__price = request.POST.get('leafs__price')
        color__price = request.POST.get('color__price')
        etching__price = request.POST.get('etching__price')
        bag__price = request.POST.get('bag__price')
        total__price = request.POST.get('total__price')
        order = (f"Размер: {drum__size} - {size__price}р \nКоличество лепестков:{drum__leafs_count} - {leafs__price}p  \nФорма лепестков:{drum__shape} \nОформление: {drum__color} - {color__price}p \nГравировка: {drum__etching} - {etching__price}p \nСумка: {drum__bag} - {bag__price}p \nПалочки: {drum__sticks} \nИтого: {total__price}р")

        name = request.POST.get('name')
        email = request.POST.get('email')
        social = request.POST.get('social')
        phone = request.POST.get('phone')
        comment = request.POST.get('message')
        person = (
            f"Имя: {name} \nEmail:{email} \nНомер телефона: {phone} \nСоц сеть:{social} \nСообщение: {comment} \n")
        print(person + order)
        # send_mail("Сообщение с сайта", "message", None,
        #           ['iampauline@mail.ru'], fail_silently=False)

        sent = True
        if sent:
            return HttpResponse('yes')
        else:
            return HttpResponse('no')
    else:
        return HttpResponse('no')

# shapes = Leafs_Shape.objects.all()
