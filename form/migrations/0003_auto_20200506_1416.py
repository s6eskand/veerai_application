# Generated by Django 3.0.4 on 2020-05-06 18:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('form', '0002_auto_20200505_1814'),
    ]

    operations = [
        migrations.AlterField(
            model_name='form',
            name='email',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='form',
            name='name',
            field=models.CharField(max_length=100),
        ),
    ]
