docker run -d --name my_nginx -p 80:80 -v nginx_data:/usr/share/nginx/html nginx
docker cp ./index.html my_nginx:/usr/share/nginx/html/

