from django.shortcuts import render
from django.http import HttpResponse
from django.core.mail import send_mail
from django.core.mail import EmailMultiAlternatives
from django.template.loader import render_to_string
from django.utils.html import strip_tags

# Create your views here.
from .models import *


def index(request):
    return render(request, 'milo_webpage/index.html')


def form_funс(request):
    if request.method == 'POST':
        sent = False
        name = request.POST.get('name')
        email = request.POST.get('email')
        comment = request.POST.get('message')
        message = (f"Имя: {name} \nEmail:{email} \nСообщение: {comment}")
        html_content = render_to_string(
            'milo_webpage/email.html', context={'name': name, 'email': email, "comment": comment})
        text_content = strip_tags(html_content)
        email = EmailMultiAlternatives(
            "Сообщение с сайта", text_content, "milofon.work@gmail.com",
            ['mymilofon@gmail.com'])
        email.attach_alternative(html_content, "text/html")
        email.send(fail_silently=False)

        # send_mail("Сообщение с сайта", message, "milofon.work@gmail.com",
        #           ['iampauline@mail.ru'], fail_silently=False)

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
        # order = (f"Размер: {drum__size} - {size__price}р \nКоличество лепестков:{drum__leafs_count} - {leafs__price}p  \nФорма лепестков:{drum__shape} \nОформление: {drum__color} - {color__price}p \nГравировка: {drum__etching} - {etching__price}p \nСумка: {drum__bag} - {bag__price}p \nПалочки: {drum__sticks} \nИтого: {total__price}р")

        name = request.POST.get('name')
        email = request.POST.get('email')
        social = request.POST.get('social')
        phone = request.POST.get('phone')
        comment = request.POST.get('message')
        # person = (
        #     f"Имя: {name} \nEmail:{email} \nНомер телефона: {phone} \nСоц сеть:{social} \nСообщение: {comment} \n")
        # print(person + order)
        # message = person + order

        html_content = render_to_string(
            'milo_webpage/email2_to_admin.html', context={'name': name, 'email': email, "comment": comment,
                                                          'phone': phone, "social": social,
                                                          'drum__size': drum__size, "size__price": size__price,
                                                          "drum__leafs_count": drum__leafs_count,
                                                          "leafs__price": leafs__price, "drum__shape": drum__shape,
                                                          "drum__color": drum__color, "color__price": color__price,
                                                          "drum__etching": drum__etching, "etching__price": etching__price,
                                                          "drum__bag": drum__bag, "bag__price": bag__price,
                                                          "drum__sticks": drum__sticks, "total__price": total__price})
        text_content = strip_tags(html_content)
        mail = EmailMultiAlternatives(
            "Заказ с сайта", text_content, "milofon.work@gmail.com",
            ['mymilofon@gmail.com'])
        mail.attach_alternative(html_content, "text/html")
        mail.send(fail_silently=False)

        html_content_buyer = render_to_string('milo_webpage/email2_to_buyer.html', context={'drum__size': drum__size, "size__price": size__price,
                                                                                            "drum__leafs_count": drum__leafs_count,
                                                                                            "leafs__price": leafs__price, "drum__shape": drum__shape,
                                                                                            "drum__color": drum__color, "color__price": color__price,
                                                                                            "drum__etching": drum__etching, "etching__price": etching__price,
                                                                                            "drum__bag": drum__bag, "bag__price": bag__price,
                                                                                            "drum__sticks": drum__sticks, "total__price": total__price})
        text_content_buyer = strip_tags(html_content_buyer)
        email_2 = EmailMultiAlternatives("Заказ с сайта MILOFON", text_content_buyer, "milofon.work@gmail.com",
                                         [email])
        email_2.attach_alternative(html_content_buyer, "text/html")
        email_2.send()
        sent = True
        if sent:
            return HttpResponse('yes')
        else:
            return HttpResponse('no')
    else:
        return HttpResponse('no')
