# Generated by Django 3.0.4 on 2020-05-06 21:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('form', '0003_auto_20200506_1416'),
    ]

    operations = [
        migrations.AddField(
            model_name='form',
            name='keyword',
            field=models.CharField(default='Sam Eskandar', max_length=100),
        ),
    ]
