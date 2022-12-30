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
    res.send("Mmm chocolate is great, mf");
});

app.get("/node", (req, res) => {
    res.send("This is the node endpoint");
});

app.get("/codeyourfuture", (req, res) => {
    res.send("Code your future man!");
});

// In this point we activate our app to listen the request. It uses the method listen on the app and uses 2 arguments: a port (number of the port you'll be using and a callback function to get the responses of the requests)
app.listen(8080, () => {
    console.log("Server is listening on port 8080. Ready to accept requests!");
});

// In this point we can start out server using the npm start command

