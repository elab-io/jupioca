## Using Docker command
```sh
// Run local development
docker-composer up next

// rebuild docker image 
docker build --no-cache -t docker-nextjs .

// ssh into the container
docker run --rm -it docker-nextjs sh
```


## Set up
```
yarn install // Fetch packages and dependence
yarn next // Run app dev mode

export to static site
/website/src/app/yarn next build
/website/src/app/yarn next export
The above cmd will generate the contenti inside the out folder

// To deploy to GCP
yarn build-all
yarn deploy


// For css development
cd jupioca/src/app/static
gulp watch

yarn build-css

```

// For firebase
firebase login
finrebase init // to set up could function and hosting

or modify .firebaserc to point to your cloud project


To run app independently without cloud function, comment out `disDir` in the next.config.js

```
module.exports = {
    exportPathMap: function () {
      return {
        '/': { page: '/' },
        '/menu': { page: '/menu' },
      }
    },
    
   // distDir: '../functions/next'
  }

```


## Reference:
* https://www.youtube.com/watch?v=IkOVe40Sy0U
* https://blog.logrocket.com/how-to-build-a-server-rendered-react-app-with-next-express-d5a389e7ab2f/
* https://gist.github.com/cobyism/4730490
* https://codeburst.io/next-js-on-cloud-functions-for-firebase-with-firebase-hosting-7911465298f2
* https://www.youtube.com/watch?v=c93iGKyvh3o
* https://github.com/firebase/functions-samples/tree/master/nextjs-with-firebase-hosting
