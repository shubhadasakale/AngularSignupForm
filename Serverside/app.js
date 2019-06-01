require('./config/config.js');
require('./models/db');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const rtsIndex = require('./routes/index.router');

var app = express();

//middleware
app.use(bodyParser.json());
app.use(cors());
app.use('/api',rtsIndex);

//start server
app.listen(process.env.PORT, () => console.log(`Server started at port : ${process.env.PORT}`));


//The app object includes methods for routing HTTP requests, configuring middleware, rendering HTML views and registering a template engine. The app.listen() function creates the Node.js web server at the specified host and port.


