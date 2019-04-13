# expressjs-docker-simple-server
The simple Express server for Docker

## Features
* Passed [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) (View more in `/public/index.html` template)
* Fits to React-Router (historyApiFallback)
* Included Node 10.10, Express 4.16.4

## How to use
* Change the value for `WORKDIR` in `/Dockerfile` to your current work directory.
* Your site is within this folder `/public`

## How to build a Dockerfile
1. Build a Dockerfile
    * Build an image: `docker build -t <yourimagename> .`

2. Create a container
    * `docker run --name yourserver -d -p 6000:8000 <yourimagename>`

    Notes:
    * Port `6000` is your local port
    * Port `8000` is the Dockerfile exposed port that you can find it within `/Dockerfile` and `/index.js`

3. Test on localhost by using web browser
    * `http://localhost:6000`

## Push your Docker image to Docker Hub
1. Create a tag: `docker tag <yourimagename> <your-docker-id>/<yourimagename>`
2. Push to Docker Hub: `docker push <your-docker-id>/<yourimagename>`

## References
* [Best practices for writing Dockerfiles](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/)
* [Push images to Docker Cloud](https://docs.docker.com/docker-cloud/builds/push-images/)
