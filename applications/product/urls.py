from django.urls import path
from . import views

app_name = "product_app"

# /products: GET, POST
# /products/:id: GET, PUT, DELETE
# /marks: GET, POST
# /marks/:id: PUT, DELETE
# /providers: GET, POST
# /providers/:id: PUT, DELETE

urlpatterns = [
    path('products/', views.products_list),
    path('products/<pk>', views.product_detail),
    path('marks/', views.marks_list),
    path('marks/<pk>', views.marks_detail),
    path('providers/', views.providers_list),
    path('providers/<pk>', views.providers_detail),
]