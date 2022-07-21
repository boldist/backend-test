const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors')
var axios = require('axios');
app.use(cors())
// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route for user
app.get('/getuser', async (req, res) => { //Line 9
  // call api to get random user data to provide it to client
  try {
    axios.get("https://randomuser.me/api")
      .then(data => {
        res.send({ UserData: data.data })
      })
      .catch(err => res.send(err));
  }
  catch (err) {
    console.error("Error", err);
    res.send({errorMsg:"something wrong with server"})
  }
});
