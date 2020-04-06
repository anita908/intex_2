from rest_framework import serializers

from api.models import Category
from api.models import Product
from api.models import Sale


# Serializers define the API representation.
class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = [ 'id', 'title' ]

class ProductSerializer(serializers.ModelSerializer):
    category = CategorySerializer()
    class Meta:
        model = Product
        fields = [ 'id', 'name', 'category', 'filename', 'description', 'price' ]

class SaleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sale
        fields = [  'name', 'address1', 'address2', 'city', 'state', 'zipcode', 'total', 'items' ]
