FROM node:16
RUN apt -y update --fix-missing
RUN apt-get install -y nodejs
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY . .
RUN npm install  --legacy-peer-deps
USER node
EXPOSE 3000
CMD [ "npm", "start" ]