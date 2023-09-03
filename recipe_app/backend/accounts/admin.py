from django.contrib import admin
from .models import UserAccount

# Register your custom user model with the admin site
admin.site.register(UserAccount)
