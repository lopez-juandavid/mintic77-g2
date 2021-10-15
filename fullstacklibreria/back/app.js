require("dotenv").config();

// Para llamar los módulos
const express = require("express");  
const cors = require("cors");
const mongoose = require("mongoose");

const port = process.env.PORT;     

const app = express();              
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// API Rutes  ---> Agregamos las rutas que vamos a estar usando
app.use('/api', require("./router/router")); 

// Conexión a DB
mongoose.connect(process.env.URI_DB)
    .then(() => console.log("Se ha establecido la conexión con la base de datos!"))  
    .catch(err => console.error(err));   

// Servidor ----> lo que lanza el Servidor y lo pone a escuchar
app.listen(port, () => {     
    console.log(`Aplicación escuchando por http://localhost:${port}`)  
})