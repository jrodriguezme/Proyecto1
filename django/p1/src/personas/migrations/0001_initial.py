# Generated by Django 3.0.7 on 2020-06-12 15:46

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='personas',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombres', models.TextField()),
                ('apellidos', models.TextField()),
                ('edad', models.TextField()),
            ],
        ),
    ]