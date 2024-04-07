# Use the official Python image as the base image
FROM python:3.8

# Define an ARG for the dependency version
ARG NUMPY_VERSION= 1.15.2

# Attempt to install numpy with the ARG
RUN pip install "numpy==${NUMPY_VERSION}"
