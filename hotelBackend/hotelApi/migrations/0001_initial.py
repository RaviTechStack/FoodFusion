# Generated by Django 4.1.5 on 2024-09-12 07:53

import autoslug.fields
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='FoodTaste',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('food_type', models.CharField(choices=[('VEG', 'veg'), ('NON-VEG', 'non-veg')], max_length=40)),
            ],
        ),
        migrations.CreateModel(
            name='FoodType',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('food_type', models.CharField(choices=[('BREAKFAST', 'Breakfast'), ('LUNCH', 'Lunch'), ('DINNER', 'Dinner'), ('BEVRAGE', 'Bevrage'), ('DESSERT', 'Dissert')], max_length=40)),
            ],
        ),
        migrations.CreateModel(
            name='Food',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('food_name', models.CharField(max_length=500)),
                ('food_content', models.CharField(max_length=500)),
                ('food_slug', autoslug.fields.AutoSlugField(editable=False, populate_from='food_name', unique=True)),
                ('food_price', models.IntegerField()),
                ('food_rating', models.IntegerField(default=4)),
                ('hastag', models.CharField(max_length=100, null=True)),
                ('food_type', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='hotelApi.foodtype')),
                ('taste', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='hotelApi.foodtaste')),
            ],
        ),
    ]
