from django.utils import timezone
from django.db.models import Prefetch

from .models import CarShop, SaleDetail

def confirm_sale(self, params):

    type_payment = params.data['type_payment']

    products_car = CarShop.objects.all()

    if len(products_car) <= 0: return -1

    total_price_sale = CarShop.objects.total_sale_card_shop()

    
    sale_global = self.create(
        type_payment= type_payment,
        total_price_sale= total_price_sale['total_sale_price'],
        total_product_sale=  total_price_sale['count_in_product'],
        total_util_sale=  total_price_sale['total_sale_util']
    )

    # instace = [
    #    SaleDetail(
    #         product= product_car.product,
    #         sale= sale_global,
    #         count= product_car.count
    #     ).objects.create()
    #     for product_car in products_car
    # ]

    #SaleDetail.objects.bulk_create(instace)
    instace = []
    for product_car in products_car:
        detail = SaleDetail(
            product= product_car.product,
            sale= sale_global,
            count= product_car.count
        )
        detail.save()
        instace.append(detail)

    CarShop.objects.all().delete()

    return [instace, total_price_sale]