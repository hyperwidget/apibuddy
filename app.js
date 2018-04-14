const express = require('express')
const fetch = require('node-fetch')
const util = require('util')
const app = express()

var userAgent = util.format(
  'apibuddy/%s (%s)',
  '0.1',
  'hunter@hypderwidget.com'
)

console.log(userAgent)

// app.use(
//   bodyParser.urlencoded({
//     // to support URL-encoded bodies
//     extended: true
//   })
// )
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

  console.log(options, 'OPTIONS')
  const response = await fetch(url, options)
    .then(res => {
      //   if (res.ok) {
      return res
      //   }

      //   return Promise.reject(
      //     new Error(`Failed to fetch ${res.url}: ${res.status} ${res.statusText}`)
      //   )
    })
    .then(res => res.json())
    .catch(err => err)

  console.log(response, 'response')

  res.json(response).end()
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
