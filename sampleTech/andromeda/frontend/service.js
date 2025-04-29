const express = require('express')
const http = require('http')

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('<p>My flashy website!</p>')
})

app.get('/ping/', (req, res) => {
  res.send('pong')
})

app.get('/deep-ping/', (req, res) => {
  const options = {
    hostname: 'be-andromeda',
    port: 80,
    path: '/ping/',
    method: 'GET'
  }

  const request = http.request(options, (response) => {
    let data = ''

    response.on('data', (chunk) => {
      data += chunk
    })

    response.on('end', () => {
      if (data === 'pong') {
        res.send('pong')
      } else {
        res.status(500).send('Internal Server Error')
      }
    })
  })

  request.on('error', (error) => {
    res.status(500).send('Internal Server Error')
  })

  request.end()
})

app.listen(port, () => {
  console.log(`Andromeda frontend is listening on port ${port}`)
})
