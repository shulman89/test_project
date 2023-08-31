from django.urls import path
from .views import AdvantagesView

app_name = 'advantages'


urlpatterns = [
    path("advantages/", AdvantagesView.as_view(), name="advantages"),
]