# Instructions for creating project

```bash


mkdir mern-stack
cd mern-stack
code .
node -v
npm 
npm i create-react-app
npx create-react-app frontend
mkdir backend
cd backend
npm init
npm i express
touch index.js
node index.js
cd frontend
npm run start
```

# code for index.js

```js
const express = require('express')
const cors = require('cors')
const app = express()
const port = 3005

app.use(cors())

app.get('/api/message/:name', (req, res) => {
    let name = req.params.name;
  res.json({"message":name})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
```
