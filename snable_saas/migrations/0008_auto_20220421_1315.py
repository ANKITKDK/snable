# Generated by Django 3.2.11 on 2022-04-21 07:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('snable_saas', '0007_services_subservices'),
    ]

    operations = [
        migrations.AddField(
            model_name='contact_genral_form',
            name='services',
            field=models.CharField(default=None, max_length=50),
        ),
        migrations.AddField(
            model_name='contact_genral_form',
            name='sub_services',
            field=models.CharField(default=None, max_length=50),
        ),
    ]