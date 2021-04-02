const express = require('express');
const session = require('express-session');
require('dotenv').config();

const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

//routes
require('./routes/api_routes')(app);
require('./routes/html_routes')(app);

app.listen(PORT, () =>
  console.log(
    `"Listening on port 8080. Visit http://localhost:8080/ in your browser.", PORT, PORT)`
  )
);