# Generated by Django 3.2.11 on 2022-04-21 08:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('snable_saas', '0009_auto_20220421_1334'),
    ]

    operations = [
        migrations.AlterField(
            model_name='contact_genral_form',
            name='services',
            field=models.IntegerField(default=None),
        ),
        migrations.AlterField(
            model_name='contact_genral_form',
            name='sub_services',
            field=models.IntegerField(default=None),
        ),
    ]