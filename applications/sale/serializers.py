from rest_framework import serializers
from .models import CarShop, SaleDetail, SaleGlobal
from applications.product.serializers import ProductSerializer


class CarShopSerializer(serializers.ModelSerializer):
    class Meta:
        model = CarShop
        fields = '__all__'

class CarShopWithProductSerializer(serializers.ModelSerializer):
    product = ProductSerializer()
    class Meta:
        model = CarShop
        fields = '__all__'

class SaleDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = SaleDetail
        fields = '__all__'

class SaleDetailWithProductSerializer(serializers.ModelSerializer):
    product = ProductSerializer()
    class Meta:
        model = SaleDetail
        fields = ('id', 'product', 'count')

class SaleGlobalSerializer(serializers.ModelSerializer):
    class Meta:
        model = SaleGlobal
        fields = '__all__'