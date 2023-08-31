from django.db import models


class Advantages(models.Model):
    """Модель блока преимуществ"""
    upper = models.CharField(max_length=250, verbose_name='Верхняя часть', blank=True)
    medium = models.CharField(max_length=250, verbose_name='Средняя часть', blank=True)
    lower = models.CharField(max_length=250, verbose_name='Нижняя часть', blank=True)

    def __str__(self):
        return f'{self.upper} {self.medium} {self.lower}'
