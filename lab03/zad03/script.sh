docker build -f Dockerfile-myapp -t myapp .

docker run --name myapp myapp &

sleep 3

docker build -f Dockerfile-mynginx -t mynginx .

docker run --name mynginx -d -p 3000:80 -p 443:443 --link myapp mynginx
