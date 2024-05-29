docker build -f Dockerfile-flask -t myapp .

docker run --name myapp myapp &

sleep 3

docker build -f Dockerfile-nginx -t mynginx .

docker run --name mynginx -d -p 80:80 --link myapp mynginx
