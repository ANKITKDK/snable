# Generated by Django 4.0.4 on 2022-05-04 10:43

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('snable_saas', '0022_blogcomment_status'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='blogcomment',
            name='website',
        ),
    ]
