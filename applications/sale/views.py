from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser 
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.pagination import PageNumberPagination

from .models import CarShop, SaleGlobal
from applications.product.models import Product
from .serializers import (
    CarShopSerializer, 
    SaleGlobalSerializer, 
    SaleDetailSerializer, 
    SaleDetailWithProductSerializer,
    CarShopWithProductSerializer,
    )
from rest_framework.decorators import api_view, permission_classes

from .functions import confirm_sale

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def cardShop_list(request):
    
    if request.method == 'GET':
        cardShop = CarShop.objects.all()
        totalSale = CarShop.objects.total_sale_card_shop()
        cardShop_serializer = CarShopWithProductSerializer(cardShop, many=True)
        return JsonResponse({ 
            "products" : cardShop_serializer.data, 
            "total_sale_price" : totalSale['total_sale_price'] or 0,
            "total_sale_products": totalSale['count_in_product'] or 0,
            "total_sale_util": totalSale['total_sale_util'] or 0
             },
            safe=False)
        
    elif request.method == 'POST':
        data = JSONParser().parse(request)
        try:
            if data['count'] <= 0:
                return JsonResponse({'message': 'count must be >'}, status=status.HTTP_400_BAD_REQUEST)
            cardShop_data = CarShop.objects.add_product(data['barcode'], data['count'])
            return JsonResponse({ "product":  cardShop_data.product.name, "count": cardShop_data.count }, status=status.HTTP_201_CREATED) 
        except Product.DoesNotExist:
            return JsonResponse({'message': 'The product does not exist'}, status=status.HTTP_400_BAD_REQUEST)
        except Exception as error:
            return JsonResponse({'message': str(error)}, status=status.HTTP_400_BAD_REQUEST)


@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def cardShop_detail(request, pk):
    
    try: 
        card_shop = CarShop.objects.get(pk=pk)
    except CarShop.DoesNotExist: 
        return JsonResponse({'message': 'The card_shop does not exist'}, status=status.HTTP_404_NOT_FOUND)

    if request.method == 'DELETE': 
        card_shop.delete() 
        return JsonResponse({'message': 'Product of cardShop was deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def global_sale(request):
    
    params = JSONParser().parse(request)
    params_global_serializer = SaleGlobalSerializer(data=params)

    if params_global_serializer.is_valid():
        res = confirm_sale(SaleGlobal.objects, params_global_serializer)
        try:
            pdetail_sale = SaleDetailWithProductSerializer(res[0], many=True)
            return JsonResponse(
                { 
                'products': pdetail_sale.data, 
                'total_sale_price': res[1]['total_sale_price'],
                'total_sale_products': res[1]['count_in_product']
                }, safe=False) 
        except:
            return JsonResponse({'message': 'sorry this buy was not possible'}, status=status.HTTP_204_NO_CONTENT)


    
    return JsonResponse(params_global_serializer.errors or pdetail_sale.errors, status=status.HTTP_400_BAD_REQUEST)



@api_view(['GET'])
@permission_classes([IsAuthenticated])
def sale_global_list(request):
    
    order = request.GET.get('order', '')

    type_payment = request.GET.get('type_payment', None)
    
    search = request.GET.get('search', None)

    custome_filter = {
        'type_payment': type_payment,
    }

    sales = SaleGlobal.objects.all_sale_global(order, search, **custome_filter)

    paginator = PageNumberPagination()
    paginator.page_size = 10
    result_page = paginator.paginate_queryset(sales, request)
    serializer = SaleGlobalSerializer(result_page, many=True)

    return paginator.get_paginated_response(serializer.data)



@api_view(['GET'])
@permission_classes([IsAuthenticated])
def sale_global_report(request):
    
    # sales = SaleGlobal.objects.sale_today()
    # pdetail_sale = SaleGlobalSerializer(sales[1], many=True)


    # return JsonResponse({ "sales": pdetail_sale.data, **sales[0] }, safe=False)
    sales = SaleGlobal.objects.sales_history_week()
    print(sales)

    return JsonResponse({ **sales }, safe=False)




@api_view(['GET'])
@permission_classes([IsAuthenticated])
def sale_global_detail(request, pk):
    global_sale = SaleGlobal.objects.get(pk=pk)
    detail_sale = global_sale.detail.all()
    sales_serializer_global = SaleGlobalSerializer(global_sale)
    sales_serializer_detail = SaleDetailWithProductSerializer(detail_sale, many=True)
    det = { "products": sales_serializer_detail.data }
    return JsonResponse({ **sales_serializer_global.data, **det }, safe=False)
