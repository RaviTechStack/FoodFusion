from django.shortcuts import render
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.viewsets import ModelViewSet
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializer import FoodSerializer, FoodTypeSerializer, TabelReservationSerializer, CartItemSerializer
from .models import Food, FoodType, Cart, CartItem
from django.contrib.auth.models import User
from .filter import FoodFilter
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.filters import SearchFilter
from rest_framework.pagination import PageNumberPagination
# Create your views here.

class FoodPagination(PageNumberPagination):
    page_size = 6
    page_query_param = "page_size"
    max_page_size = 10


class FoodView(ModelViewSet):
    queryset = Food.objects.all().order_by("?")
    serializer_class = FoodSerializer
    lookup_field = "food_slug"
    filter_backends = [DjangoFilterBackend, SearchFilter]
    # filterset_class = FoodFilter
    pagination_class = FoodPagination
    search_fields = ["food_name", "taste__taste_type", "food_type__food_type"]


class FoodCategoryView(ModelViewSet):
    queryset = FoodType.objects.all()
    serializer_class = FoodTypeSerializer

class FoodTopView(ModelViewSet):
    queryset = Food.objects.all().order_by("-view")[0:3]
    serializer_class = FoodSerializer

class test(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]
    def get(self, request):
        return Response({"message" : "Logged In"})
    

class Home(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]
    def get(self, request):
        return Response({"message" : "Now In", "user" : request.user.username})

class showCart(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]
    def get(self, request):
        queryset = CartItem.objects.all()
        serializer = CartItemSerializer(queryset, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        
        queryset = CartItem.objects.all()
        data = request.data
        cart, create = Cart.objects.get_or_create(user = request.user)
        
        ItemExist = CartItem.objects.filter(cart__user = request.user, food_item_id= data.get("food_item_id")).exists()
        if ItemExist:
            return Response({"msg" : "Item Already exist"})
        
        serializer = CartItemSerializer(data=data)

        if serializer.is_valid():
            serializer.save(cart = cart)
            return Response({"message": "completed"})
        else:
            return Response({"msg": "not completed", "err": serializer.errors})
    
    def delete(self, request, item_id):
        print("item_id", item_id)
        try:
            cart_item = CartItem.objects.get(cart__user = request.user, id = item_id)
            cart_item.delete()
            return Response({"msg" : "item removed"})

        except:
            return Response({"msg" : "Something error"})
    
class updateCartQuantity(APIView):
    def patch(self, request):
        id = request.data.get("id")
        newQuantity = request.data.get("quantity")
        updateCart = CartItem.objects.get(id= id)
        if(updateCart):
            updateCart.quantity = newQuantity
            updateCart.save()
            return Response({"msg": f"quantity Updated {newQuantity},{id},{updateCart.quantity}"})
        return Response({"msg" : "there is problem in backend"})


class Registerview(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        username = request.data.get("username")
        password = request.data.get("password")

        user = User.objects.create_user(username= username, password= password)
        user.save()
        return Response({"message": "User Created Succuessfully"})


class TabelReservationView(APIView):
    # authentication_classes = [JWTAuthentication]
    # permission_classes = [IsAuthenticated]
    def post(self, request):
        print(request.data)
        data = request.data.copy()
        print(request.user.id)
        # data["Booked_by"] = request.user.id
        serializer = TabelReservationSerializer(data= data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message" : "data Saved Successfully", "data": data})
        return Response({"message" : "Error in saving data", "error": serializer.errors})
