const axios = require('axios')
const express = require('express')
const cors = require('cors')
const app = express()
const port = 5000

app.use(cors());
app.get('/', async(req, res) => {
    const response = await axios.get('https://randomuser.me/api/');
    res.send(response.data.results[0])
})

app.listen(port, () => {
  console.log(`User App server listening on port ${port}`)
})
