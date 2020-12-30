from django.db import models
from django.db.models.signals import post_save
from .signals import update_stok_product
from model_utils.models import TimeStampedModel
from applications.product.models import Product
from .managers import CarShopManager, SalesGlobalManager

class CarShop(TimeStampedModel):

    product = models.ForeignKey(
        Product,
        on_delete=models.CASCADE
    )
    count = models.PositiveIntegerField('count')
    
    objects = CarShopManager()

    def __str__(self):
        return str(self.count) + '-' + str(self.product.name)  + '-'  + str(self.product.barcode) 


class SaleGlobal(TimeStampedModel):
    TARJETA = '0'
    EFECTIVO = '1'
    BONO = '2'
    OTRO = '3'

    TIPO_PAYMENT_CHOICES = [
        (TARJETA, 'Tarjeta'),
        (EFECTIVO, 'Efectivo'),
        (BONO, 'Bono'),
        (OTRO, 'Otro'),
    ]

    date_sale = models.DateTimeField(
        'date_sale',
        auto_now_add=True, 
        blank=True
    )
    
    type_payment = models.CharField(
        'type_payment',
        max_length=2,
        choices=TIPO_PAYMENT_CHOICES
    )

    total_price_sale = models.DecimalField(
        'sale_price_total', 
        max_digits=15, 
        decimal_places=2
    )

    total_util_sale = models.DecimalField(
        'sale_util_total', 
        max_digits=15, 
        decimal_places=2
        # default = 0
    )

    total_product_sale = models.DecimalField(
        'total_product_sale', 
        max_digits=15, 
        decimal_places=0,
    )

    objects = SalesGlobalManager()

    def __str__(self):
        return str(self.id) + '-' + str(self.date_sale) + '-' + str(self.total_price_sale)

class SaleDetail(TimeStampedModel):

    product = models.ForeignKey(
        Product,
        on_delete=models.CASCADE
    )
    
    sale = models.ForeignKey(
        SaleGlobal,
        on_delete=models.CASCADE,
        related_name = 'detail'
    )
    count = models.PositiveIntegerField('count')
    
    
    def __str__(self):
        return str(self.product.name) + '-' + str(self.sale.id)

post_save.connect(update_stok_product, sender=SaleDetail)