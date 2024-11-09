
from django.urls import path, include
from .views import * 
from rest_framework.routers import DefaultRouter
router = DefaultRouter()
router.register(r"listFood", FoodView)
router.register(r'category', FoodCategoryView)
router.register(r'topList', FoodTopView)

urlpatterns = [
    path("", include(router.urls)),
    path("register", Registerview.as_view()),
    path("reservation", TabelReservationView.as_view()),
    path("try", test.as_view()),
    path("home", Home.as_view()),
    path("showCart", showCart.as_view()),
    path("showCart/<item_id>", showCart.as_view()),
    path("cart/updateQuantity", updateCartQuantity.as_view()),

]