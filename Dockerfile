FROM node:10.10
WORKDIR C:\projects\cms\expressjs-docker-simple-server
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8000
CMD [ "npm", "start" ]
