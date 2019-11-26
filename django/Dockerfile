FROM python:3

WORKDIR /app/django/

COPY ./requirements.txt ./
RUN pip3 install -r ./requirements.txt

COPY ./manage.py ./manage.py
COPY ./air_base/ ./air_base/

COPY ./init/ ./init/
RUN chmod u+x ./init/django_setup.sh
