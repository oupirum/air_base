from rest_framework.generics import RetrieveAPIView
from rest_framework.exceptions import NotFound
from rest_framework.response import Response

from air_base.models.employee import EmployeeSerializer, Employee


class EmployeeView(RetrieveAPIView):
	def get(self, request, *args, **kwargs):
		todo = Employee.objects.filter(id=kwargs['id']).first()
		if not todo:
			return NotFound()
		return Response(EmployeeSerializer(todo).data)
