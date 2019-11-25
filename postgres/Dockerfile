FROM postgres:12.1

RUN echo $DB_HOST:$DB_PORT:$DB_NAME:$POSTGRES_USER:$POSTGRES_PASSWORD > ~/.pgpass
RUN chmod 600 ~/.pgpass

COPY ./init/01-db_setup.sh /docker-entrypoint-initdb.d/01-db-setup.sh

