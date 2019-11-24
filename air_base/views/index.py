from django.contrib.auth.decorators import login_required
from django.shortcuts import render
from django.utils.decorators import method_decorator
from django.views import View


class IndexView(View):
	@method_decorator(login_required)
	def get(self, request):
		return render(request, 'todo/index.html', {
			'username': request.user.username
		})
