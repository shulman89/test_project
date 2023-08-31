from django.db import models


class Navbar(models.Model):
    name = models.CharField(max_length=24, verbose_name='Название пункта меню')
    ordering = models.PositiveIntegerField(unique=True, verbose_name='Порядковый номер')

    class Meta:
        ordering = ('ordering',)

    def __str__(self):
        return self.name
