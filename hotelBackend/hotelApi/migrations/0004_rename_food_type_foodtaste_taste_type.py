# Generated by Django 4.1.5 on 2024-09-12 08:21

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('hotelApi', '0003_alter_food_food_img_url'),
    ]

    operations = [
        migrations.RenameField(
            model_name='foodtaste',
            old_name='food_type',
            new_name='taste_type',
        ),
    ]
