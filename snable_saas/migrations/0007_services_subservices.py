# Generated by Django 3.2.11 on 2022-04-21 06:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('snable_saas', '0006_auto_20220419_1837'),
    ]

    operations = [
        migrations.CreateModel(
            name='Services',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('services_name', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='SubServices',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('services_name', models.IntegerField()),
                ('sub_services_name', models.CharField(max_length=100)),
            ],
        ),
    ]
