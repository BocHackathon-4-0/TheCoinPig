# Generated by Django 4.2.6 on 2023-10-08 09:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('MyUsers', '0006_remove_childuser_is_parent_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='account_id',
            field=models.IntegerField(default=0),
        ),
    ]
