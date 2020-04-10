from rest_framework import serializers

from api.models import Category
from api.models import Product
from api.models import Sale
from api.models import COVID

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


# Serializers define the API representation.
class COVIDSerializer(serializers.ModelSerializer):
    class Meta:
        model = COVID
        fields = [ 'id', 'url', 'current_amount', 'goal', 'donators', 'days_active', 'title', 'description', 'user_first_name', 
        'user_last_name', 'campaign_image_url', 'campaign_hearts', 'social_share_total', 'location_city', 'location_country', 'is_charity', 'quality']