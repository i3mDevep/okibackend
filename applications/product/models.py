from model_utils.models import TimeStampedModel
from django.db import models
from .managers import ProductManager

class Marca(TimeStampedModel):

    name = models.CharField(
        'name', 
        max_length=30
    )

    def __str__(self):
        return self.name


class Provider(TimeStampedModel):

    name = models.CharField(
        'provider', 
        max_length=100
    )
    email = models.EmailField(
        blank=True, 
        null=True
    )
    phone = models.CharField(
        'celphone',
        max_length=40,
        blank=True,
    )
    web = models.URLField(
        'web',
        blank=True,
    )


    def __str__(self):
        return self.name


class Product(TimeStampedModel):

    UNIT_CHOICES = (
        ('0', 'Kg'),
        ('1', 'L'),
        ('2', 'U'),
    )

    barcode = models.CharField(
        max_length=13,
        unique=True
    )
    name = models.CharField(
        'name', 
        max_length=40
    )
    provider = models.ForeignKey(
        Provider, 
        on_delete=models.CASCADE
    )
    marca = models.ForeignKey(
        Marca, 
        on_delete=models.CASCADE
    )

    description = models.TextField(
        'description',
        blank=True,
    )
    unit = models.CharField(
        'measure_unit',
        max_length=1,
        choices=UNIT_CHOICES, 
    )
    count = models.PositiveIntegerField(
        'quatity_available',
        default=0
    )
    cost = models.DecimalField(
        'cost',
        max_digits=10, 
        decimal_places=2
    )
    price = models.DecimalField(
        'price',
        max_digits=10, 
        decimal_places=2
    )
    num_sale = models.PositiveIntegerField(
        'quantity_sale',
        default=0
    )
    
    objects = ProductManager()
    
    def __str__(self):
        return   str(self.barcode) + '-' + self.name
