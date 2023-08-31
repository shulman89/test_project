from django.urls import path
from .views import NavbarView

app_name = 'navbar'


urlpatterns = [
    path("navbar/", NavbarView.as_view(), name="navbar"),
]