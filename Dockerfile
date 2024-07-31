# Use an official Python runtime as a parent image
FROM python:3.9-slim-buster

# Set the working directory in the container
WORKDIR /usr/app

# Install system dependencies
RUN apt-get update && apt-get install -y build-essential wget curl git libatlas-base-dev libgfortran5

# Install TA-Lib
RUN wget http://prdownloads.sourceforge.net/ta-lib/ta-lib-0.4.0-src.tar.gz && \
    tar -xvzf ta-lib-0.4.0-src.tar.gz && \
    cd ta-lib/ && \
    ./configure --prefix=/usr && \
    make && \
    make install && \
    cd .. && \
    rm -rf ta-lib-0.4.0-src.tar.gz ta-lib/

# Copy your files
COPY . .

# Install Python dependencies
RUN pip install --upgrade pip
RUN pip install -r requirements.txt -r requirements-hyperopt.txt --no-cache-dir

# Install Freqtrade
RUN pip install -e .

# Install FreqUI
RUN freqtrade install-ui

# Add .local/bin to PATH
ENV PATH="/root/.local/bin:$PATH"

# Expose the UI port
EXPOSE 8080

# Set the entrypoint to ensure we're using the correct freqtrade command
ENTRYPOINT ["freqtrade"]

# Set the default command to run trade with API server
CMD ["trade", "--config", "config.json", "--strategy", "MyAwesomeStrategy", "--db-url", "sqlite:////usr/app/user_data/tradesv3.sqlite"]