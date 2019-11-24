FROM python:3

WORKDIR /app

COPY ./requirements.txt ./
RUN pip3 install -r ./requirements.txt

COPY ./manage.py ./manage.py
COPY ./air_base/ ./air_base/
COPY ./frontend/build/ ./frontend/build/
