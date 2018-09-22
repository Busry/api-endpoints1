// _________Dependencies______________________


const express = require('express');

const router = express.Router();


// _________________"/orders" ______________________


// GET "/orders" request handling
router.get('/', (request, response, next) => {
  response
    .status(200)
    .json({
      message: 'get all orders'
    });
});


// POST "/orders" request handling
router.post('/', (request, response, next) => {
  const order = {
    productId: request.body.productId,
    quantity: request.body.quantity
  };
  response
    .status(201)
    .send({
      message: 'place a new order',
      order
    });
});

// _______________"/orders/{id}" __________________________


// fetch /:orderId request handling
router.get('/:orderId', (request, response, next) => {
  const id = request.params.orderId;
  response
    .status(200)
    .json({
      id,
      message: 'fetch a specific order'

    });
});


// put /:orderId request to update an order
router.put('/:orderId', (request, response, next) => {
  response
    .status(200)
    .json({
      message: 'updated the order status'
    });
});

// _________________________________________________________
//* ********************************************************

module.exports = router;
