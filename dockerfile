#Using official Docker Ubuntu Image can edit later if necessary
FROM ubuntu:20.04

#Update and install packages necessary
RUN apt-get update && apt-get install -y \
    git \
    curl

#Install node version manager nvm
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash

#Source NVM to load it into the shell environment
SHELL ["/bin/bash", "-c"]
#run nvm installation at the right version, may need to be updated later
RUN source $HOME/.nvm/nvm.sh && nvm install 18.6.0 && nvm use 18.6.0 && npm install -g npm@9.0.0

#The contents of checkout-js will be placed in this directory in the container
RUN mkdir /app

#Clone the Github repo into the /app directory in the container
RUN git clone https://github.com/cailinredden/customcheckout.git /app

#Set the directory I will be working in container as checkout-js
WORKDIR /app/checkout-js

# Source NVM again, to ensure it's available in the shell environment and pull dependencies from package.json
RUN source $HOME/.nvm/nvm.sh && npm ci

#Start Dev Server (will need to update later after setting up cyberduck and webdav to host)
CMD npm run dev && npm run dev:server

#Expose port 8080 (also will need to update later)
EXPOSE 8080
