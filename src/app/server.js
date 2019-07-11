// See: https://github.com/zeit/next.js/tree/master/examples/pass-server-data

const express = require('express')
const next = require('next')
const api = require('./operations/get-item')
const compression = require('compression')  


const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()
  server.use(compression())

  // Set up home page as a simple render of the page.
  server.get('/', (req, res) => {
    console.log('Render home page')
    const itemData = api.getItem()
    return app.render(req, res, '/', { itemData })
  })

  // Serve the item webpage with next.js as the renderer
  server.get('/menu', (req, res) => {
    const itemData = api.getItem()
    app.render(req, res, '/menu', { itemData })
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