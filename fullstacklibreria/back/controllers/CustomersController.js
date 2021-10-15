const customersModel = require ("../models/CustomersModel");  


module.exports = class CustomersController {   
    
    // Traer toda la información de la BD
    static async getAll (request, response) {
        try {
            const customers = await customersModel.find();  
            response.status(200).json(customers);            
        } catch (err) {
            response.status(400).json({message: err.message});
        }
    }

    // Consultar un unico documento de los que estan en esa tabla
    static async getByCedula (request, response) {   
        try {                   
            const cedula = request.params.cedula;    
            const customer = await customersModel.find({cedula: cedula})  
            
            if (customer!= null) {              
                response.status(200).json(customer);   
            } else {
                response.status(404).json();          
            }
        } catch (err) {               
            response.status(400).json({message: err.message});  
        }
    }

    // Consultar por cédula y password
    static async getByCedulaPassword (request, response) { 
        try {                    
            const cedula = request.params.cedula;
            const password = request.params.password;
            const customers = await customersModel.find({cedula: cedula, password: password});   
            
            if (customers!= null) {              
                response.status(200).json(customers);  
            } else {
                response.status(404).json();          
            }
        } catch (error) {                
            response.status(400).json({message: error.message});   
        }
    }


    // Insertar información de la BD
    static async insert (request, response) {
        try {
            const document = request.body;          
            // Validar la información recibida (validar todas las llaves del documento y los tipos de datos)
            const customer = await customersModel.create(document);
            response.status(201).json(customer);
        } catch (error) {
            response.status(400).json({message: error.message});  
        }
    }

     // Eliminar información de la BD
     static async deleteByCedula (request, response) {
        try {
            const cedula = request.params.cedula;
            const customer = await customersModel.deleteOne({cedula: cedula});
            response.status(200).json(customer);
        } catch (error) {
            response.status(400).json({message: error.message});
        }
    }

    // Actualizar información de la BD  --->Se puede actualizar un único valor o el documento completo (pasando la información a través del body)
     static async updateByCedula (request, response) {
        try {
            const cedula = request.params.cedula;  
            const data = request.body;    
            const customer = await customersModel.updateOne({cedula: cedula}, data);  
            response.status(200).json(customer);    
        } catch (error) {
            response.status(400).json({message: error.message});
        }
    }

}