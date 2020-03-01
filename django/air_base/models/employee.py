from django.db import models
from rest_framework import serializers

from air_base.models.department import Department, DepartmentSerializer


class Employee(models.Model):
	class Meta:
		ordering = ['-id']

	name = models.CharField(max_length=200)
	position = models.TextField(max_length=1000)
	phone = models.CharField(max_length=15)
	email = models.EmailField(max_length=100)
	department = models.ForeignKey(Department, on_delete=models.CASCADE, blank=True, null=True)


class EmployeeSerializer(serializers.Serializer):
	id = serializers.CharField(read_only=True)
	name = serializers.CharField()
	position = serializers.CharField(allow_blank=True)
	phone = serializers.CharField(allow_blank=True)
	email = serializers.CharField(allow_blank=True)
	department = DepartmentSerializer()
