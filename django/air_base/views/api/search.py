from rest_framework.generics import ListAPIView
from django.db.models import Q

from air_base.models.employee import Employee, EmployeeSerializer


class SearchView(ListAPIView):
	serializer_class = EmployeeSerializer

	def get_queryset(self):
		query = self.request.query_params.get('query', '')
		return Employee.objects.filter(
			Q(name__icontains=query) |
			Q(position__icontains=query) |
			Q(phone__icontains=query) |
			Q(email__icontains=query) |
			Q(department__name__icontains=query)
		)
