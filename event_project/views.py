# event_project/views.py
from django.http import HttpResponse

def home(request):
    return HttpResponse("Welcome to the Event API. Go to /api/events/ to see the events.")
