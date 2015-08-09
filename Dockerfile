FROM nginx
MAINTAINER Andrew Stuart <andrew.stuart2@gmail.com>

VOLUME /etc/nginx/certs
VOLUME /var/cache/nginx
EXPOSE 443
EXPOSE 80

CMD ["forego", "start", "-r"]

ADD dist/* /usr/share/nginx/html/