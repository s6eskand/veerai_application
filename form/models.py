from django.db import models

# Model created for contact form to store in Postgres table
class Form(models.Model):
    name = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    phone_number = models.IntegerField(default=0)