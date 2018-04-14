const express = require('express')
const fetch = require('node-fetch')
const util = require('util')
const cors = require('cors')
const app = express()

app.use(express.json()) // to support JSON-encoded bodies
app.use(express.urlencoded())
app.use(cors())

app.get('/', (req, res) => res.send('Working!'))
app.post('/', async (req, res) => {
  const fetch = require('node-fetch')
  const { url, options } = req.body

  const response = await fetch(url, options)
    .then(res => res)
    .then(res => res.json())
    .catch(err => err)

  res.send(response).end()
})

app.listen(9967, () => console.log('APIBUDDY listening on port 9967!'))
