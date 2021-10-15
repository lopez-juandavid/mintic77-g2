//RUTAS

const express = require("express");

const CustomersController = require("../controllers/CustomersController");
const BooksController = require('../controllers/BooksController');

const router = express.Router();  

// Rutes Customers
router.get('/customers/', CustomersController.getAll);   
router.get('/customers/:cedula', CustomersController.getByCedula);
router.get('/customers/:cedula/:password', CustomersController.getByCedulaPassword);
router.post('/customers', CustomersController.insert);
router.delete('/customers/:cedula', CustomersController.deleteByCedula);
router.put('/customers/:cedula', CustomersController.updateByCedula);


// Rutes Books - POST, DELETE AND PUT.
router.get('/books/all', BooksController.getAll);
router.get('/books/:id', BooksController.getById); // Get by ID
router.post('/books', BooksController.insert);
router.delete('/books/:id', BooksController.deleteById);
router.put('/books/:id', BooksController.updateById);

// Para poder usar esta aplicación, voy a tener que exportarla como modulo
module.exports = router;   