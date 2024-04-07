ARG PYTHON_VERSION=3.11.9

FROM python:${PYTHON_VERSION}-alpine

ARG PORT=8080

ENV SERVER_PORT=$PORT

WORKDIR /opt/app

COPY server.py ./

RUN pip install flask

CMD ["python", "server.py"]

