const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Parse incoming request bodies in a middleware before your handlers
app.use(bodyParser.json());

// Define a route to handle GET requests to the root URL
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

// Define a route to handle POST requests to the '/data' URL
app.post('/data', (req, res) => {
  const requestData = req.body;

  // Perform some processing with the received data
  console.log('Received data:', requestData);

  // Send a response
  res.send('Data received successfully!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



