from django import template
from django.contrib.staticfiles import finders
from django.utils.html import escape
from django.template import Template, Context

register = template.Library()

@register.simple_tag
def includestatic(path, encoding='UTF-8'):
	file_path = finders.find(path)
	with open(file_path, "r", encoding=encoding) as f:
		string = f.read()
		return escape(string)

@register.simple_tag
def includestatichtml(path, context={}, encoding='UTF-8'):
	file_path = finders.find(path)
	if not file_path:
		raise FileNotFoundError('\'%s\' not found in static' % path)
	with open(file_path, "r", encoding=encoding) as f:
		string = f.read()
		t = Template(string, name=path)
		return t.render(Context(context))
