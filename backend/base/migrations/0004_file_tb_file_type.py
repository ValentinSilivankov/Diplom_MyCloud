# Generated by Django 4.1.3 on 2022-12-21 07:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0003_file_tb_file_name'),
    ]

    operations = [
        migrations.AddField(
            model_name='file_tb',
            name='file_type',
            field=models.CharField(blank=True, max_length=20, null=True),
        ),
    ]
