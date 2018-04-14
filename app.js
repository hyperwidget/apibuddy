const express = require('express')
const fetch = require('node-fetch')
const util = require('util')
const app = express()

app.use(express.json()) // to support JSON-encoded bodies
app.use(express.urlencoded())
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})

app.get('/', (req, res) => res.send('Working!'))
app.post('/', async (req, res) => {
  const fetch = require('node-fetch')
  const { url, options } = req.body

  const response = await fetch(url, options)
    .then(res => res)
    .then(res => res.json())
    .catch(err => err)

  res.json(response).end()
})

app.listen(3000, () => console.log('APIBUDDY listening on port 3000!'))
