const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('<html><body><h1>Hello, World!</h1></body></html>')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
