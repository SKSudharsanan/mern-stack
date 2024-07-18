const express = require('express')
const app = express()
const port = 3005

app.get('/api/message/:name', (req, res) => {
    let name = req.params.name;
  res.json({"message":name})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})