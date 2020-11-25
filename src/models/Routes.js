const express = require('express');
const routes = express.Router();

const ProductController = require('../controllers/ProductController');

routes.put(ProductController.insert);
routes.get('/products', ProductController.index );

module.exports = routes;