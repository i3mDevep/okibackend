from django.db import models
from django.utils import timezone
from django.db.models import Q, Sum, F, FloatField, PositiveIntegerField, ExpressionWrapper
from applications.product.models import Product

class CarShopManager(models.Manager):
    
    def add_product(self, barcode, count):
        
        product = Product.objects.get(
            barcode = barcode
        )
        product_in_card = self.filter(
            product = product
        )
        if len(product_in_card) > 0:
            card_find = product_in_card[0]
            card_find.count = count + card_find.count
            if card_find.count > product.count:
                raise Exception('sorry this actions was not possible because product dont have that count')
            card_find.save()
            return card_find

        if count > product.count:
            raise Exception('sorry this actions was not possible because product dont have that count')

        cardShop = self.create(
            product = product,
            count = count
        )
        return cardShop



    def total_sale_card_shop(self):
        
        query = self.aggregate(
            total_sale_price=Sum(
                F('count')*F('product__price'),
                output_field=FloatField()
            ),
            count_in_product=Sum(
                F('count'),
                output_field=PositiveIntegerField()
            )
        )
        return query      
