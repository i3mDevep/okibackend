# Generated by Django 3.1.4 on 2020-12-16 02:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sale', '0003_auto_20201216_0135'),
    ]

    operations = [
        migrations.AlterField(
            model_name='saleglobal',
            name='date_sale',
            field=models.DateTimeField(auto_now_add=True, verbose_name='date_sale'),
        ),
    ]
