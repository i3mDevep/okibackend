from rest_framework import serializers
from .models import Product, Marca, Provider


class MarcaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Marca
        fields = ('id', 'name')


class ProviderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Provider
        fields = ('id', 'name', 'phone', 'email', 'web')

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

class ProductSerializerGET(serializers.ModelSerializer):
    marca = MarcaSerializer()
    provider = ProviderSerializer()
    class Meta:
        model = Product
        fields = (
            'id',
            'created',
            'modified',
            'barcode',
            'name',
            'description',
            'unit',
            'count',
            'cost',
            'price',
            'num_sale',
            'provider',
            'marca'
        )
