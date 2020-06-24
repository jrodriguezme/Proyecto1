from django.db import models

# Create your models here.
class personas(models.Model):
	nombres=models.CharField(max_length=100)
	apellidos=models.CharField(max_length=100)
	edad=models.IntegerField()
	donador=models.BooleanField()
	email=models.EmailField(blank=True)
