from .serializers import NavbarSerializer
from .models import Navbar
from rest_framework.generics import ListAPIView


class NavbarView(ListAPIView):
    serializer_class = NavbarSerializer
    queryset = Navbar.objects.all()
