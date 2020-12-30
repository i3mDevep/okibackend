from django.db import models
from django.utils import timezone
from django.db.models import Q, Sum, Count, F, FloatField, PositiveIntegerField, ExpressionWrapper
from applications.product.models import Product
from django.db.models.functions import TruncDay

class SalesGlobalManager(models.Manager):

    def custom_filter(self, *args, **kwargs):
        updated_kwargs = {k: v for k, v in kwargs.items() if v is not None}
        return super().filter(*args, **updated_kwargs)

    def sales_history_week(self):
        return self.annotate(
            day=TruncDay('date_sale')
            ).values('day').annotate(
                total_price_sale=Sum('total_price_sale'),
                total_utils_sale=Sum('total_util_sale')
                ).order_by('-day')[0:7]         
    

    def sale_today(self):
        query = self.filter(
            date_sale__date = timezone.now()
        )
        sales = query
        query = query.aggregate(
            total_price_sale=Sum(
                F('total_price_sale'),
                output_field=FloatField()
            ),
            total_utils_sale=Sum(
                F('total_util_sale'),
                output_field=FloatField()
            ),
            num_sales=Count(
                F('id'),
                output_field=PositiveIntegerField()
            ),
            num_products_sales=Sum(
                F('total_product_sale'),
                output_field=PositiveIntegerField()
            ),
        )
        return [query, sales]

    def all_sale_global(self, order, search, **kwargs):
        
        query = self.custom_filter(**kwargs)

        if search:
            query = query.filter(
                Q(detail__product__barcode = search) | Q(id=search)
            )
        #query = self.custom_filter(detail__product__barcode = 123)

        if order == 'date':
            return query.order_by('-date_sale')
        elif order == 'price':
            return query.order_by('-total_price_sale')
        elif order == 'quantity':
            return query.order_by('-total_product_sale')
        
        return query.order_by('-created')
    

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
            ),
            total_sale_util=Sum(
                ((F('count')*F('product__price')) - (F('count')*F('product__cost'))),
                output_field=FloatField()
            ),
        )
        return query      
