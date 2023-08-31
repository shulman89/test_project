from rest_framework.serializers import ModelSerializer
from .models import Navbar


class NavbarSerializer(ModelSerializer):
    class Meta:
        model = Navbar
        fields = "__all__"
