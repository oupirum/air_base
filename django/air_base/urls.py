from django.contrib import admin
from django.urls import path

from air_base.views.index import IndexView
from air_base.views.api.departments import DepartmentsView
from air_base.views.api.department import DepartmentView
from air_base.views.api.department_employees import DepartmentEmployeesView
from air_base.views.api.employee import EmployeeView
from air_base.views.api.search import SearchView

urlpatterns = [
	path('admin/', admin.site.urls),
	path('', IndexView.as_view(), name='index'),

	path('api/departments', DepartmentsView.as_view()),
	path('api/department/<str:id>', DepartmentView.as_view()),
	path('api/department/<str:id>/employees', DepartmentEmployeesView.as_view()),
	path('api/employee/<str:id>', EmployeeView.as_view()),
	path('api/search', SearchView.as_view()),
]
