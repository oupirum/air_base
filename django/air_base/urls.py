from django.contrib import admin
from django.urls import path

from air_base.views.index import IndexView
# from air_base.views.api.air_base import DepartmentView, EmployeeView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', IndexView.as_view(), name='index'),

	# path('api/department/<str:id>', DepartmentView.as_view()),
	# path('api/employee/<str:id>', EmployeeView.as_view()),
]
