# Generated by Django 4.2.6 on 2023-10-07 21:07

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Quests', '0006_quest_is_completed'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='quest',
            name='is_completed',
        ),
    ]
