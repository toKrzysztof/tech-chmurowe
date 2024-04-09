docker volume create nodejs_data
docker run -d -v nodejs_data:/app node
docker volume create all_volumes

