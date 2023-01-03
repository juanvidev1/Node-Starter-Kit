// Here we import express to our app
const express = require('express');
// Here we create the app that will be using the express method.
const app = express();

// Now we need our handler functions. Basically the way to get diferent responses on our api. We can use the get, post, put and delete methods on our app. Examples below
app.get("/", (req, res) => {
    // console.log(req);
    res.send("Hello gonorreas");
});

app.get("/chocolate", (req, res) => {
    let bars = req.query.bars; // In this case the search param will be "bars" (the word at the end of req.search.<queryParamName>)
    res.send(`Mmm chocolate is great, mf! And I want ${bars} bars of chocolate`);
});

app.get("/node", (req, res) => {
    let val1 = req.query.value1;
    let val2 = req.query.value2;
    const result = val1 * val2; 
    res.send("In the node endpoint the multiply from " + val1 + " and " + val2 + " is " + result);
});

app.get("/codeyourfuture", (req, res) => {
    res.send("Code your future man!");
});

const albumsData = [
    {
      albumId: "10",
      artistName: "Beyoncé",
      collectionName: "Lemonade",
      artworkUrl100:
        "http://is1.mzstatic.com/image/thumb/Music20/v4/23/c1/9e/23c19e53-783f-ae47-7212-03cc9998bd84/source/100x100bb.jpg",
      releaseDate: "2016-04-25T07:00:00Z",
      primaryGenreName: "Pop",
      url: "https://www.youtube.com/embed/PeonBmeFR8o?rel=0&amp;controls=0&amp;showinfo=0",
    },
    {
      albumId: "11",
      artistName: "Beyoncé",
      collectionName: "Dangerously In Love",
      artworkUrl100:
        "http://is1.mzstatic.com/image/thumb/Music/v4/18/93/6d/18936d85-8f6b-7597-87ef-62c4c5211298/source/100x100bb.jpg",
      releaseDate: "2003-06-24T07:00:00Z",
      primaryGenreName: "Pop",
      url: "https://www.youtube.com/embed/ViwtNLUqkMY?rel=0&amp;controls=0&amp;showinfo=0",
    },
  ];
  
  app.get("/albums", function (req, res) {
    res.send(albumsData);
  });

// In this point we activate our app to listen the request. It uses the method listen on the app and uses 2 arguments: a port (number of the port you'll be using and a callback function to get the responses of the requests)
app.listen(8080, () => {
    console.log("Server is listening on port 8080. Ready to accept requests!");
});

// In this point we can start out server using the npm start command

