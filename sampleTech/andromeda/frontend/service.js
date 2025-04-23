const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('<p>My flashy website!</p>')
})

app.get('/ping', (req, res) => {
  res.send('pong')
})

app.listen(port, () => {
  console.log(`Andromeda frontend is listening on port ${port}`)
})
