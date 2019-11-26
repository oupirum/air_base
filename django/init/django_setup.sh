#!/bin/bash

trap 'exit $?' ERR

python manage.py makemigrations
python manage.py migrate
