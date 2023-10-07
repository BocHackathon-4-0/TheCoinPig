# Generated by Django 4.2.6 on 2023-10-07 10:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Investments', '0001_initial'),
        ('Quests', '0002_quest_reward'),
    ]

    operations = [
        migrations.AddField(
            model_name='quest',
            name='investments_unlocks',
            field=models.ManyToManyField(blank=True, to='Investments.investmentproduct'),
        ),
        migrations.AddField(
            model_name='quest',
            name='order',
            field=models.IntegerField(blank=True, help_text='Leave Blank for auto increment in same category', null=True),
        ),
    ]