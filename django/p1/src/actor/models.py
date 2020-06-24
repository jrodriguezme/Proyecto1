from django.db import models

# Create your models here.
class actor(models.Model):
	nombre=models.TextField()
	pais=models.TextField()
	edad=models.TextField()
	fechaNac=models.TextField()

		