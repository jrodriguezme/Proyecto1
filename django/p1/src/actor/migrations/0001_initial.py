# Generated by Django 3.0.7 on 2020-06-18 06:37

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='actor',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.TextField()),
                ('pais', models.TextField()),
                ('edad', models.TextField()),
                ('fechaNac', models.TextField()),
            ],
        ),
    ]
