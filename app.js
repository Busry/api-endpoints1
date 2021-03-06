
// {____________DEPENDENCIES___________________

const express = require('express');

const app = express();

// ____________DISPLAY ACTIVITIES ON CONSOLE______

const morgan = require('morgan');

app.use(morgan('dev'));

// ____________BODY PARSING________________

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// ____________PERMISION HANDLING___________________

//  dependencies
const permRoutes = require('./api/routes/cors');

// middle ware(req, res_Handler)
app.use(permRoutes.permision);


// ____________ORDERS REQUEST HANDLING______________

// Importingorders route file
const orderRoutes = require('./api/routes/orders');

// It middle ware(req, res_Handler)
app.use('/api/v1/orders', orderRoutes);

// ____________ERROR HANDLING______________________

// Importing error route file
const errorRoutes = require('./api/routes/errors');


// It middle ware(req, res_Handler)
app.use(errorRoutes.error1);
app.use(errorRoutes.error2);

// ____________RETURNING____________________________

module.exports = app;
