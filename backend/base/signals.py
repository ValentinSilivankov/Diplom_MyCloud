import os

from django.db.models.signals import post_migrate
from django.contrib.auth.models import User
from django.dispatch import receiver


admin_password = os.environ.get('ADMIN_PASSWORD', '')
if not admin_password:
    raise ValueError("ADMIN_PASSWORD environment variable not set")

@receiver(post_migrate)
def create_superuser(sender, **kwargs):

    username = 'admin@admin.com'
    password = admin_password
    email = 'admin@admin.com'

    if sender.name == 'base':
         if not User.objects.filter(username='admin@admin.com').exists():
            User.objects.create_superuser(username, password, email)
   