FROM nginx:1.17

RUN rm /etc/nginx/conf.d/default.conf
COPY ./air_base.conf /etc/nginx/conf.d/air_base.conf

CMD nginx -g 'daemon off;'
