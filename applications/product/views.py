from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser 
from rest_framework import status
from rest_framework.permissions import IsAuthenticated

from rest_framework.pagination import PageNumberPagination

from .models import Product, Marca, Provider
from .serializers import ProductSerializer, ProductSerializerGET, MarcaSerializer, ProviderSerializer
from rest_framework.decorators import api_view, permission_classes

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def products_list(request):

    if request.method == 'GET':

        search = request.GET.get('search', '')
        order = request.GET.get('order', '')
        per_page = request.GET.get('per_page', 5)

        products = Product.objects.search_products(search, order)

        paginator = PageNumberPagination()
        paginator.page_size = per_page
        result_page = paginator.paginate_queryset(products, request)
        serializer = ProductSerializerGET(result_page, many=True)

        return paginator.get_paginated_response(serializer.data)
        
    elif request.method == 'POST':
        product_data = JSONParser().parse(request)
        product_serializer = ProductSerializer(data=product_data)
        if product_serializer.is_valid():
            product_serializer.save()
            return JsonResponse(product_serializer.data, status=status.HTTP_201_CREATED) 
        return JsonResponse(product_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes([IsAuthenticated])
def product_detail(request, pk):
    
    try: 
        product = Product.objects.get(pk=pk)
    except Product.DoesNotExist: 
        return JsonResponse({'message': 'The product does not exist'}, status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'GET':
        product_serializer = ProductSerializerGET(product) 
        return JsonResponse(product_serializer.data)  
    
    elif request.method == 'PUT': 
        product_data = JSONParser().parse(request) 
        product_serializer = ProductSerializer(product, data=product_data) 
        if product_serializer.is_valid(): 
            product_serializer.save() 
            return JsonResponse(product_serializer.data) 
        return JsonResponse(product_serializer.errors, status=status.HTTP_400_BAD_REQUEST) 
    
    elif request.method == 'DELETE': 
        product.delete() 
        return JsonResponse({'message': 'Product was deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)



@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def marks_list(request):

    if request.method == 'GET':
        marks = Marca.objects.all()
        marks_serializer = MarcaSerializer(marks, many=True)
        return JsonResponse(marks_serializer.data, safe=False)
        
    elif request.method == 'POST':
        mark_data = JSONParser().parse(request)
        mark_serializer = MarcaSerializer(data=mark_data)
        if mark_serializer.is_valid():
            mark_serializer.save()
            return JsonResponse(mark_serializer.data, status=status.HTTP_201_CREATED) 
        return JsonResponse(mark_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE'])
@permission_classes([IsAuthenticated])
def marks_detail(request, pk):
    
    try: 
        mark = Marca.objects.get(pk=pk)
    except Marca.DoesNotExist: 
        return JsonResponse({'message': 'The mark does not exist'}, status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'PUT': 
        mark_data = JSONParser().parse(request) 
        mark_serializer = MarcaSerializer(mark, data=mark_data) 
        if mark_serializer.is_valid(): 
            mark_serializer.save() 
            return JsonResponse(mark_serializer.data) 
        return JsonResponse(mark_serializer.errors, status=status.HTTP_400_BAD_REQUEST) 
    
    elif request.method == 'DELETE': 
        mark.delete() 
        return JsonResponse({'message': 'Mark was deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def providers_list(request):

    if request.method == 'GET':
        providers = Provider.objects.all()
        providers_serializer = ProviderSerializer(providers, many=True)
        return JsonResponse(providers_serializer.data, safe=False)
        
    elif request.method == 'POST':
        provider_data = JSONParser().parse(request)
        provider_serializer = ProviderSerializer(data=provider_data)
        if provider_serializer.is_valid():
            provider_serializer.save()
            return JsonResponse(provider_serializer.data, status=status.HTTP_201_CREATED) 
        return JsonResponse(provider_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE'])
@permission_classes([IsAuthenticated])
def providers_detail(request, pk):
    
    try: 
        provider = Provider.objects.get(pk=pk)
    except Provider.DoesNotExist: 
        return JsonResponse({'message': 'The provider does not exist'}, status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'PUT': 
        provider_data = JSONParser().parse(request) 
        provider_serializer = ProviderSerializer(provider, data=provider_data) 
        if provider_serializer.is_valid(): 
            provider_serializer.save() 
            return JsonResponse(provider_serializer.data) 
        return JsonResponse(provider_serializer.errors, status=status.HTTP_400_BAD_REQUEST) 
    
    elif request.method == 'DELETE': 
        provider.delete() 
        return JsonResponse({'message': 'Provider was deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)
