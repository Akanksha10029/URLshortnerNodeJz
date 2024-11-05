const express = require('express');
const path = require('path');
const { connectToMongoDB } = require('./connection');
const urlRoute = require('./routes/url');
const staticRoute = require('./routes/staticRouter');
const app = express();
const port = 8001;

// Connect to MongoDB
connectToMongoDB('mongodb://localhost:27017/url-shortener');

app.set("view engine", "ejs");
app.set("views",path.resolve("./views"));

// Use JSON in the body of the request and response objects
app.use(express.json());

// Use URL encoding in the body of the request and response objects for form data
app.use(express.urlencoded({extended: true}));

// Use the URL route
app.use('/url', urlRoute);

//Server side rendering at home page
app.get('/',staticRoute);

// Use the static route for css
app.use(express.static('statics'));

// Start the server
app.listen(port, ()=> console.log(`Server is running on port ${port}`));

//run this file using "npm start" command in the terminal 