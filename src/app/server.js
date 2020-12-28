// See: https://github.com/zeit/next.js/tree/master/examples/pass-server-data

const express = require('express')
const next = require('next')
const api = require('./operations/get-item')
const compression = require('compression')  


const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev, xPoweredBy: false })
const handle = app.getRequestHandler()

// disalbe the x-poewred-by
// app.config.poweredByHeader = false
app.nextConfig.poweredByHeader = false

app.prepare().then(() => {
  const server = express()
  server.disable('x-powered-by'); // This disables Express Header

  server.use(compression())

  // Set up home page as a simple render of the page.
  server.get('/', (req, res) => {
    const itemData = api.getItem()
    return app.render(req, res, '/', { itemData })
    // return app.render(req, res, '/', {   })
  })

  server.get('/cs', (req, res) => {
    // const itemData = api.getItem()
    return app.render(req, res, '/cs', { })
  })

  server.get('/accessibility', (req, res) => {
    // const itemData = api.getItem()
    // app.render(req, res, '/cs', { itemData })
    app.render(req, res, '/accessibility', { })
  })

  server.get('/thankyou', (req, res) => {
    // const itemData = api.getItem()
    app.render(req, res, '/thankyou', {})
  })  

  // Serve the item webpage with next.js as the renderer
  server.get('/menu', (req, res) => {
    const itemData = api.getItem()
    app.render(req, res, '/menu', { itemData })
  })



  server.get('/location', (req, res) => {
    const itemData = api.getItem()
    app.render(req, res, '/location', { itemData })
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


  server.listen(3000, err => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})