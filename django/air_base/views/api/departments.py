from rest_framework.generics import ListAPIView

from air_base.models.department import DepartmentSerializer, Department


class DepartmentsView(ListAPIView):
	serializer_class = DepartmentSerializer

	def get_queryset(self):
		return Department.objects.all()
