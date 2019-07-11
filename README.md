## Set up
```
yarn install // Fetch packages and dependence
yarn next // Run app dev mode


// To deploy to GCP
yarn deploy


// For css development
cd static
gulp watch

```


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
