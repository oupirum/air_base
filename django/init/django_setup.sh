#!/bin/bash

trap 'exit $?' ERR

python manage.py makemigrations
python manage.py migrate

python manage.py shell <<EOF
from django.contrib.auth.models import User;

if not User.objects.filter(username='$DJANGO_SU_USER').exists():
    User.objects.create_superuser('$DJANGO_SU_USER', '$DJANGO_SU_EMAIL', '$DJANGO_SU_PASSWORD');
    print('Superuser created');
else:
    print('Superuser already exist');
EOF
