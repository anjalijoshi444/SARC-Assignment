from django.contrib import admin
from django.urls import path, include
from .views import home
urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('events.urls')),
    path('', home, name='home'),
]
