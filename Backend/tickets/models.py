from django.utils import timezone
from django.db import models

from accounts.models import CustomUser

class Ticket(models.Model):
    title = models.CharField(max_length=255)
    email = models.EmailField()
    department = models.CharField(max_length=100)
    priority = models.CharField(max_length=20)
    problem = models.TextField()
    contactPhone = models.CharField(max_length=15, blank=True, null=True)
    time_created = models.DateTimeField(auto_now_add=True)
    

    def __str__(self):
        return self.title
