const express = require('express');
const { connectToMongoDB } = require('./connection');
const urlRoute = require('./routes/url');

const app = express();
const port = 8001;

// Connect to MongoDB
connectToMongoDB('mongodb://localhost:27017/url-shortener');

// Use JSON in the body of the request and response objects
app.use(express.json());

// Use the URL route
app.use('/', urlRoute);

// Start the server
app.listen(port, ()=> console.log(`Server is running on port ${port}`));