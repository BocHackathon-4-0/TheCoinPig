# Generated by Django 4.2.6 on 2023-10-07 14:43

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('Investments', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='NoticeInvestment',
            fields=[
                ('investment_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='Investments.investment')),
                ('notice_settlement_date', models.DateTimeField(blank=True, null=True)),
                ('notice_sent', models.BooleanField(default=False)),
                ('pending_withdraw_balance', models.FloatField(blank=True, default=0, null=True)),
            ],
            bases=('Investments.investment',),
        ),
        migrations.CreateModel(
            name='NoticeProduct',
            fields=[
                ('investmentproduct_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='Investments.investmentproduct')),
                ('penalty', models.FloatField(default=20)),
                ('notice_duration', models.DurationField()),
            ],
            bases=('Investments.investmentproduct',),
        ),
    ]