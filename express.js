const express = require('express');
const app = express(); 
const port = process.env.PORT || 5000;
const cors = require('cors')
app.use(cors())
// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route for user
app.get('/getuser', (req, res) => { //Line 9
  const Result = {
    results: [
      {
        gender: "male",
        name: {
          title: "Mr",
          first: "Connor",
          last: "Wood"
        },
        location: {
          street: {
            number: 1616,
            name: "White Oak Dr"
          },
          city: "Wollongong",
          state: "Tasmania",
          country: "Australia",
          postcode: 1123,
          coordinates: {
            latitude: "-87.5611",
            longitude: "-164.5173"
          },
          timezone: {
            offset: "+1:00",
            description: "Brussels, Copenhagen, Madrid, Paris"
          }
        },
        email: "connor.wood@example.com",
        login: {
          uuid: "3f72ffaa-18f5-4c42-9535-8679d2c382fd",
          username: "bluegoose604",
          password: "duke",
          salt: "hG7uXpig",
          md5: "032f3400446b50c01c218a7910ca848e",
          sha1: "f9a3494935c0d2fa51781bd5fdf2a6be1e424046",
          sha256: "42cd5389fbc3c1249066f13f70a426dd5a396e05a598b92a5e39bcd828bb417a"
        },
        dob: {
          date: "1969-03-04T13:39:29.328Z",
          age: 53
        },
        registered: {
          date: "2012-01-19T20:34:15.511Z",
          age: 10
        },
        phone: "08-1725-1988",
        cell: "0468-827-853",
        id: {
          name: "TFN",
          value: "268814133"
        },
        picture: {
          large: "https://randomuser.me/api/portraits/men/61.jpg",
          medium: "https://randomuser.me/api/portraits/med/men/61.jpg",
          thumbnail: "https://randomuser.me/api/portraits/thumb/men/61.jpg"
        },
        nat: "AU"
      }
    ],
    info: {
      seed: "02b34e270dbb1860",
      results: 1,
      page: 1,
      version: "1.4"
    }
  }
  res.json({
    UserData: Result
  })
});