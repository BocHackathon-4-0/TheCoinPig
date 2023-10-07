# Generated by Django 4.2.6 on 2023-10-06 23:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('MyUsers', '0002_parentuser_childuser'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='childuser',
            options={'verbose_name_plural': 'Children Users'},
        ),
        migrations.AlterModelOptions(
            name='parentuser',
            options={'verbose_name_plural': 'Parent Users'},
        ),
        migrations.AddField(
            model_name='user',
            name='balance',
            field=models.FloatField(default=0),
        ),
    ]