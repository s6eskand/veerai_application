from django.db import models

# Model created for contact form to store in Postgres table as well as keyword for message view
class Form(models.Model):
    name = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=12)
    keyword = models.CharField(max_length=100, default='Sam Eskandar')