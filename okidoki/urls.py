from django.contrib import admin
from django.urls import path, re_path, include
from rest_framework_simplejwt import views as jwt_views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/token/', jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    re_path('api/', include('applications.product.urls')),
    re_path('api/', include('applications.sale.urls')),
    re_path('metabase/', include('applications.okimetabase.urls')),
]
