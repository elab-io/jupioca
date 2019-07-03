// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });


// See: 
// https://github.com/jthegedus/firebase-gcp-examples/tree/master/functions-express
// https://codeburst.io/next-js-on-cloud-functions-for-firebase-with-firebase-hosting-7911465298f2


const functions = require("firebase-functions")
const admin = require('firebase-admin');

const next = require("next")

const api = require('./operations/get-item')
const express = require('express')

var dev = process.env.NODE_ENV !== "production"
var app = next({ dev, conf: { distDir: "next" } })
var handle = app.getRequestHandler()

admin.initializeApp();

var server = express();
server.get('/', (req, res) => {

  app.prepare().then(()=>{
      const itemData = api.getItem()
      return app.render(req, res, '/', { itemData })
  });  

  server.get('/item', (req, res) => {
    const itemData = api.getItem()
    app.render(req, res, '/item', { itemData })
  })

  // When rendering client-side, we will request the same data from this route
  server.get('/_data/item', (req, res) => {
    const itemData = api.getItem()
    res.json(itemData)
  })

  // Fall-back on other next.js assets.
  server.get('*', (req, res) => {
    return handle(req, res)
  })
});

exports.next = functions.https.onRequest(server);
