from django.db import models

# Create your models here.
class movie(models.Model):
	nombre=models.CharField(max_length=100)
	productora=models.CharField(max_length=100)
	anio=models.IntegerField()
	formato4k=models.BooleanField()
