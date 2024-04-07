ARG PYTHON_VERSION=3.11

FROM python:${PYTHON_VERSION}

WORKDIR /opt/app

COPY myapp/* ./

RUN pip install --no-cache-dir -r requirements.txt

CMD python app.py
