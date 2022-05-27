FROM node:10
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
RUN npm install -g nodemon
WORKDIR /home/node/app
COPY . .
RUN npm install
USER node
EXPOSE 5000
CMD [ "nodemon", "app.js" ]