from django.db import models

# Create your models here.


class Leafs_Shape(models.Model):
    examples_of_shape = models.ImageField(upload_to='media/images')
