from django.urls import path
from . import views

app_name = "sale_app"

urlpatterns = [
    path('car-shops/', views.cardShop_list),
    path('car-shops/<pk>', views.cardShop_detail),
    path('sale-global/confirm/', views.global_sale),
    path('sale-global/list/', views.sale_global_list),
    path('sale-global/report-today/', views.sale_global_report_today),
    path('sale-global/report-week/', views.sale_global_report_week),
    path('sale-global/list/<pk>', views.sale_global_detail),
]