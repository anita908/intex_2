from django.db import models
from api.fields import JSONField

# Create your models here.
class Category(models.Model):
    title = models.TextField()

class Product(models.Model):
    category = models.ForeignKey(Category, on_delete=models.PROTECT)
    name = models.TextField()
    description = models.TextField()
    filename = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)

class Sale(models.Model):
    name = models.TextField()
    address1 = models.TextField()
    address2 = models.TextField(null=True, blank=True)
    city = models.TextField()
    state = models.TextField()
    zipcode = models.TextField()
    total = models.DecimalField(max_digits=10, decimal_places=2)
    items = JSONField(default=dict)
    payment_intent = JSONField(default=dict)

class COVID(models.Model):
    url = models.TextField()
    current_amount = models.DecimalField(max_digits=20, decimal_places=2)
    goal = models.DecimalField(max_digits=20, decimal_places=2)
    donators = models.DecimalField(max_digits=20, decimal_places=2)
    days_active = models.DecimalField(max_digits=20, decimal_places=2)
    title = models.TextField()
    description = models.TextField()
    user_first_name = models.TextField()
    user_last_name = models.TextField()
    campaign_image_url = models.TextField()
    campaign_hearts = models.DecimalField(max_digits=20, decimal_places=2)
    social_share_total = models.DecimalField(max_digits=20, decimal_places=2)
    location_city = models.TextField()
    location_country = models.TextField()
    is_charity = models.BooleanField()