from rest_framework.generics import ListAPIView
from .serializers import AdvantagesSerializer
from .models import Advantages

class AdvantagesView(ListAPIView):
    queryset = Advantages.objects.all()
    serializer_class = AdvantagesSerializer
