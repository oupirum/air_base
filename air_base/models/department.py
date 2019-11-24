from django.db import models
from rest_framework import serializers


class Department(models.Model):
	class Meta:
		ordering = ['-id']

	name = models.CharField(max_length=200)


class DepartmentSerializer(serializers.Serializer):
	id = serializers.CharField(read_only=True)
	name = serializers.CharField()
