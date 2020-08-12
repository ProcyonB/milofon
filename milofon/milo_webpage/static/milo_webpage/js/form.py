from django.shortcuts import render
from django.http import HttpResponse


def form(request):
    if request == 'POST':
        name = request.POST['name']
        email = request.POST['email']
        message = request.POST['message']
        print(name, email, message)
        return HttpResponse('ok')
    else:
        return render(request, 'milo_webpage/index.html')
