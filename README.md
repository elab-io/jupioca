## How to run

```sh
⟩ ./start.sh
Select the operation ************
  1) Starts Next.js in development mode
  2) Export Static HTML to {out} directory
  3) Rebuild docker image
  4) Ssh into the container
```

## Alternatively using Docker command

```sh
// Run local development
docker-composer up next

// rebuild docker image 
docker build --no-cache -t docker-nextjs .

// ssh into the container
docker run --rm -it docker-nextjs sh
```

## For front-end style

Sping up development container, 
then modify the src/app/public/scss/site.scss, then it will automatically compile.



## Reference:
* https://www.youtube.com/watch?v=IkOVe40Sy0U
* https://blog.logrocket.com/how-to-build-a-server-rendered-react-app-with-next-express-d5a389e7ab2f/
* https://gist.github.com/cobyism/4730490
* https://codeburst.io/next-js-on-cloud-functions-for-firebase-with-firebase-hosting-7911465298f2
* https://www.youtube.com/watch?v=c93iGKyvh3o
* https://github.com/firebase/functions-samples/tree/master/nextjs-with-firebase-hosting
