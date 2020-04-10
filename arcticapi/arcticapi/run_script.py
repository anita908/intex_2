#!/usr/bin/env python3

# initialize django
import os
os.environ['DJANGO_SETTINGS_MODULE'] = 'arcticapi.settings'
import django
django.setup()

# regular imports
from api.models import COVID
import json

# main script
def main():
    # Category.objects.create(title="Office")
    # Category.objects.create(title="Clothes")
    # Category.objects.create(title="Food")
    # Category.objects.create(title="Household")
    # Category.objects.create(title="Other")
    # Category.objects.create(title="Ducks")

    # with open('products.json') as json_file:
    #     data = json.load(json_file)

    # products = data['products']
    # for prod in products:
    #     dbprod = Product()
    #     dbprod.name = prod['name']
    #     dbprod.filename = prod['filename']
    #     dbprod.description = prod['description']
    #     dbprod.price = prod['price']
    #     dbprod.category = Category.objects.get(title=prod['category'])

    #     dbprod.save()
    with open('campaigns.json') as json_file:
        data = json.load(json_file)

    campaigns = data["campaigns"]
    for prod in campaigns:
        dbprod = COVID()
        dbprod.url = prod['url']
        dbprod.current_amount = prod['current_amount']
        dbprod.goal = prod['goal']
        dbprod.donators = prod['donators']
        dbprod.days_active = prod['days_active']
        dbprod.title = prod['title']
        dbprod.description = prod['description']
        dbprod.user_first_name = prod['user_first_name']
        dbprod.user_last_name = prod['user_last_name']
        dbprod.campaign_image_url = prod['campaign_image_url']
        dbprod.campaign_hearts = prod['campaign_hearts']
        dbprod.social_share_total = prod['social_share_total']
        dbprod.location_city = prod['location_city']
        dbprod.location_country = prod['location_country']
        dbprod.is_charity = prod['is_charity']
        dbprod.quality = prod['quality']

        dbprod.save()

# bootstrap
if __name__ == '__main__':
    main()