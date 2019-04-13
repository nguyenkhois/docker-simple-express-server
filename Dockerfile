FROM node:10.15.3
WORKDIR C:\projects\docker-simple-expressjs-server
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8000
CMD [ "npm", "start" ]
