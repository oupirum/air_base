from rest_framework.generics import RetrieveAPIView
from rest_framework.exceptions import NotFound
from rest_framework.response import Response

from air_base.models.department import DepartmentSerializer, Department


class DepartmentView(RetrieveAPIView):
	def get(self, request, *args, **kwargs):
		todo = Department.objects.filter(id=kwargs['id']).first()
		if not todo:
			return NotFound()
		return Response(DepartmentSerializer(todo).data)
