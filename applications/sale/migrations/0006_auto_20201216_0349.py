# Generated by Django 3.1.4 on 2020-12-16 03:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sale', '0005_auto_20201216_0349'),
    ]

    operations = [
        migrations.AlterField(
            model_name='saleglobal',
            name='total_product_sale',
            field=models.DecimalField(decimal_places=2, max_digits=15, verbose_name='total_product_sale'),
        ),
    ]
