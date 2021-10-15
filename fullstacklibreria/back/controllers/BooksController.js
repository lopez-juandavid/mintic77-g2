const BooksModel = require("../models/BooksModel");
const booksModel = require("../models/BooksModel");
var mongoose = require('mongoose');

module.exports = class BooksController {

    static async getAll (request, response) {
        try {
            const books = await booksModel.find();
            if (books != null) {
                response.status(200).json(books);
            } else {
                response.status(404).json();
            }
        } catch (err) {
            response.status(400).json({message: err.message});
        }
    };

     // Get object by id
    static async getById (req, res) { 
        try {
            // 1. Obtener la información a buscar en la DB
            const id = req.params.id; // el id de params es el nombre que se le da en routes.js
            
            // if (mongoose.Types.ObjectId.isValid(id)) {
            //     console.log("Por fin hpta!");
            //     console.log(id);
            // } else {
            //     console.log("Paila");
            // }
            // 2. Comunicarse con la DB y realizar la búsqueda en modo await
            const book = await BooksModel.findById( {_id: id} ) 

            // Si el book existe:
            if (book != null) {
                // 3. Responder la solicitud
                res.status(200).json(book);
            } else {
                res.status(404).json();
            }
        } catch (err) {
            res.status(400).json({message: err.message});
        }
    };

    static async insert (req, res) {
        try {
            const document = req.body; // 1. Obtener la información a almacenar en la DB

            // 2. Validar la información recibida:
            // A implementar... para evitar que se creen documentos vacíos o con valores raros

            // 3. Si cumple, almacenamos en la DB
            const book = await booksModel.create(document);
            
            // 4. Responder
            res.status(200).json(book);
        } catch (err) {
            res.status(400).json({message: err.message});
        }
    };

    static async deleteById (req, res) {
        try {
            const id = req.params.id; // 1. Obtener la información a eliminar en la DB
    
            // 2. Eliminar de la DB
            const book = await booksModel.deleteOne({_id: id});

            // 3. Verificación
            if (book.deletedCount == 0) {
                console.log("No se eliminó ningún registro.");
            } else {
                console.log(`Se eliminó ${book.deletedCount} registro.`);
            }

            res.status(200).json(book);
            // 4. Responder
            res.status(200).json();
        } catch (err) {
            res.status(400).json({message: err.message});
        }
    };

    static async updateById (req, res) {
        try {
            const id = `${req.params.id.toString().trim()}`; // el id de params es el nombre que se le da en routes.js
            
            if (mongoose.Types.ObjectId.isValid(id)) {
                console.log("Por fin hpta!");
                console.log(id);
            } else {
                console.log("Paila");
                console.log(id);
            }
            const data = req.body; // 2. Info a actualizar
            const book = await booksModel.updateOne({_id: id}, data);
            console.log(book);
            if (book.matchedCount != 0) {
                res.status(200).json(book);
            } else {
                res.status(404).json({message: `No existe el id: ${id}`});
            }
            
        } catch (error) {
            res.status(400).json({message: error.message});
        }
    };

    
}