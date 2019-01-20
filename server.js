const express = require("express");
const path = require('path');
const bodyParser = require("body-parser");
const app = express();
const api = require('./server/api.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Dist Folder Location
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes
app.use('/api', api);

// Redirect all other routes to Angular
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// Start express server
app.listen(3000, function(){
  console.log("Server is listening on port 3000");
});
