from django.db import models
from django.contrib.auth.hashers import check_password as check_password_hash

class Users(models.Model):
    id = models.AutoField(primary_key=True)
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.CharField(max_length=255, unique=True)
    password = models.CharField(max_length=255)
    last_login = models.DateTimeField(auto_now=True, null=True)
    created_at = models.DateTimeField(auto_now=True, null=True)
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name','password']
    is_anonymous = False
    is_authenticated = True
    is_active = True 

    class Meta:
        db_table = 'users'

    def __str__(self):
        return f'{self.name}'

