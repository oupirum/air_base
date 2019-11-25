FROM python:3

WORKDIR /app/

COPY ./requirements.txt ./
RUN pip3 install -r ./requirements.txt

COPY ./manage.py ./manage.py
COPY ./air_base/ ./air_base/

CMD bash -c "python manage.py makemigrations && python manage.py migrate && python manage.py runserver 0.0.0.0:8000"
