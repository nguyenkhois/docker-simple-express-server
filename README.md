# expressjs-docker-simple-server
The simple Express server for Docker

## Features
* Passed [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) (View more in `/public/index.html` template)
* Fits to React-Router (historyApiFallback)
* Included Node 10.10, Express 4.16.3

## How to use
* Change the value for `WORKDIR` in `/Dockerfile` to your work directory.
* Your site is within 

## How to build a Dockerfile
Build a Dockerfile
* Build an image: `docker build -t yourimagename .`

Push up to Docker Hub
* Create a tag: `docker tag yourimagename <your-docker-id>/yourimagename`
* Push up to Docker Hub: `docker push <your-docker-id>/yourimagename`

## References
* [Best practices for writing Dockerfiles](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/)
* [Push images to Docker Cloud](https://docs.docker.com/docker-cloud/builds/push-images/)