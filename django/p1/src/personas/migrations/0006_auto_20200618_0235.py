# Generated by Django 3.0.7 on 2020-06-18 07:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('personas', '0005_auto_20200618_0232'),
    ]

    operations = [
        migrations.AlterField(
            model_name='personas',
            name='email',
            field=models.EmailField(blank=True, default='@', max_length=254),
            preserve_default=False,
        ),
    ]
