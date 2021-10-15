const mongoose =require("mongoose");

const customersSchema = mongoose.Schema({  
    cedula: Number,
    nombre: String,
    apellido: String,
    password: Number
})

module.exports = mongoose.model("customers", customersSchema);

