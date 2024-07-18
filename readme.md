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
const app = express()
const port = 3005

app.get('/api/message', (req, res) => {
  res.json({"message":"Hello World"})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
```

# cd frontend

```js
import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:3005/api/message')
      .then(response => response.json())
      .then(data => setMessage(data.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>{message}</p>
      </header>
    </div>
  );
}

export default App;

```
