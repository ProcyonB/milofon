from django.db import models

# Create your models here.


class Leafs_Shape(models.Model):
    examples_of_shape = models.ImageField(upload_to='images')

    def save(self, *args, **kwargs):
        try:
            this_record = Leafs_Shape.objects.get(id=self.id)
            if this_record.examples_of_shape != self.examples_of_shape:
                this_record.examples_of_shape.delete(save=False)
        except:
            pass
        super(Leafs_Shape, self).save(*args, **kwargs)

    def delete(self, *args, **kwargs):
        self.examples_of_shape.delete(save=False)
        super(Leafs_Shape, self).delete(*args, **kwargs)


class Leafs_Count(models.Model):
    leafs_count_examples = models.ImageField(upload_to='images')

    def save(self, *args, **kwargs):
        try:
            this_record = Leafs_Count.objects.get(id=self.id)
            if this_record.leafs_count_examples != self.leafs_count_examples:
                this_record.leafs_count_examples.delete(save=False)
        except:
            pass
        super(Leafs_Count, self).save(*args, **kwargs)

    def delete(self, *args, **kwargs):
        self.leafs_count_examples.delete(save=False)
        super(Leafs_Count, self).delete(*args, **kwargs)


class Coloration(models.Model):
    colorations_examples = models.ImageField(upload_to='images')

    def save(self, *args, **kwargs):
        try:
            this_record = Coloration.objects.get(id=self.id)
            if this_record.colorations_examples != self.colorations_examples:
                this_record.colorations_examples.delete(save=False)
        except:
            pass
        super(Coloration, self).save(*args, **kwargs)

    def delete(self, *args, **kwargs):
        self.colorations_examples.delete(save=False)
        super(Coloration, self).delete(*args, **kwargs)


class Etching(models.Model):
    etchings_examples = models.ImageField(upload_to='images')

    def save(self, *args, **kwargs):
        try:
            this_record = Etchings.objects.get(id=self.id)
            if this_record.etchings_examples != self.etchingss_examples:
                this_record.etchings_examples.delete(save=False)
        except:
            pass
        super(Etching, self).save(*args, **kwargs)

    def delete(self, *args, **kwargs):
        self.etchings_examples.delete(save=False)
        super(Etching, self).delete(*args, **kwargs)
