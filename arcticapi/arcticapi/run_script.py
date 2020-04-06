#!/usr/bin/env python3

# initialize django
import os
os.environ['DJANGO_SETTINGS_MODULE'] = 'arcticapi.settings'
import django
django.setup()

# regular imports
from api.models import Category, Product 
import json

# main script
def main():

    with open('products.json') as json_file:
        data = json.load(json_file)

    products = data['products']
    for prod in products:
        dbprod = Product()
        dbprod.name = prod['name']
        dbprod.filename = prod['filename']
        dbprod.description = prod['description']
        dbprod.price = prod['price']
        dbprod.category = Category.objects.get(title=prod['category'])
        dbprod.save()

# bootstrap
if __name__ == '__main__':
    main()
