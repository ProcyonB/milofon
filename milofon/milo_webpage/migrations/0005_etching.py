# Generated by Django 3.0.8 on 2020-08-11 19:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('milo_webpage', '0004_coloration'),
    ]

    operations = [
        migrations.CreateModel(
            name='Etching',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('etchings_examples', models.ImageField(upload_to='images')),
            ],
        ),
    ]