from rest_framework.generics import ListAPIView

from air_base.models.employee import Employee, EmployeeSerializer


class DepartmentEmployeesView(ListAPIView):
	serializer_class = EmployeeSerializer

	def get_queryset(self):
		department_id = self.kwargs['id']
		return Employee.objects.filter(department__id=department_id)
