# Generated by Django 3.0.7 on 2020-06-18 14:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('movie', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='movie',
            name='formato4k',
            field=models.BooleanField(default=False),
            preserve_default=False,
        ),
    ]