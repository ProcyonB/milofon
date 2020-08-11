from django.contrib import admin
from .models import*
# Register your models here.
# admin.site.register(Leafs_Shape)


@admin.register(Leafs_Shape)
class Leafs_ShapeAdmin(admin.ModelAdmin):
    list_display = ['examples_of_shape']


@admin.register(Leafs_Count)
class Leafs_CountAdmin(admin.ModelAdmin):
    list_display = ['leafs_count_examples']


@admin.register(Coloration)
class ColorationAdmin(admin.ModelAdmin):
    list_display = ['colorations_examples']


@admin.register(Etching)
class EtchingAdmin(admin.ModelAdmin):
    list_display = ['etchings_examples']
