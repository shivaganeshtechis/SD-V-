from django.db import models
from cloudinary.models import CloudinaryField
from apps.category.models import Category
# Create your models here.


class Movie(models.Model):
    MY_CHOICES = (
        ('Newly Released', 'Newly Released'),
        ('Coming Soon', 'Coming Soon'),
    )

    class Meta(object):
        db_table = 'movie'

    name = models.CharField(
        'name', blank=False, null=False, max_length=50, db_index=True, default='Name of Movies'
    )
    description = models.CharField(
        'description', blank=False, null=False, max_length=500, db_index=True, default="Description"
    )
    release_type = models.CharField(
        'release_type', blank=True, null=True, max_length=50, choices=MY_CHOICES
    )
    category_id = models.ForeignKey(
        Category, on_delete=models.CASCADE, blank=True, null=True
    )
    image = CloudinaryField(
        'Image', blank=True, null=True
    )
    trailer_link = models.CharField(
        'Trailer Link', blank=True, null=False, max_length=5000, db_index=True
    )
    created_at = models.DateTimeField(
        'Created Time', blank=True, auto_now_add=True
    )
    updated_at = models.DateTimeField(
        'Updated Time', blank=True
    )
