const express = require('express')
const app = express()
const port = 3005

app.get('/api/message', (req, res) => {
  res.json({"message":"Hello World"})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})