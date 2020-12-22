from django.db import models
from django.utils import timezone
from django.db.models import Q, F

class ProductManager(models.Manager):

    def search_products(self, kword, order):
        
        query = self.filter(
            Q(name__icontains=kword) | Q(barcode=kword)
        )

        if order == 'date':
            return query.order_by('created')
        elif order == 'name':
            return query.order_by('name')
        elif order == 'stok':
            return query.order_by('count')
        
        return query.order_by('-created')
    
    def update_stok_sale_product(self, venta_id):
        #
        query = self.filter(
            product_sale__sale__id=venta_id
        )
        #
        query.update(count=(F('count') + 1))