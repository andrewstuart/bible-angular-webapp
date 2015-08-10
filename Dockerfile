FROM nginx:latest
MAINTAINER Andrew Stuart <andrew.stuart2@gmail.com>

VOLUME /etc/nginx/certs
VOLUME /var/cache/nginx
EXPOSE 443
EXPOSE 80

CMD ["/usr/sbin/nginx", "-g", "daemon off;"]

COPY dist /usr/share/nginx/html
