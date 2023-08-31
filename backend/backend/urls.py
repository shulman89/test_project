from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('advantages.urls', namespace='advantages')),
    path('', include('navbar.urls', namespace='navbar')),
]
