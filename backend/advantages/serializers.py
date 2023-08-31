from rest_framework import serializers
from .models import Advantages


class AdvantagesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Advantages
        fields = "__all__"
