# Generated by Django 3.2.11 on 2022-04-29 10:16

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('snable_saas', '0015_comments'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='comments',
            name='post_id',
        ),
    ]