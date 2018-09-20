# expressjs-docker-simple-server
The simple Express server for Docker

## Features
* Passed [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) (View more in `/public/index.html` template)
* Fits to React-Router (historyApiFallback)

## How to use
* Change the value for `WORKDIR` in `/Dockerfile` to your work directory.

## How to build a Docker file
* Build an Docker image: `docker build -t yourimagename .`
* Create a tag: `docker tag yourimagename <your-docker-id>/yourimagename`
* Push up to Docker Hub: `docker push <your-docker-id>/yourimagename`
