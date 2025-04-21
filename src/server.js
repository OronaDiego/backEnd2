import express from 'express';
import { errorHandler } from './middewares/error-handler.js';
import { initMongoDB } from './daos/mongodb/connection/db.js';

const app = express();

//llevanto middelware que me permite manejar rutas complejas y el fomrato json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//declaro las rutas

//error handler

//coneccion BD
initMongoDB
    .then(()=> console.log('Conectado a la base de datos'))
    .catch((error)=> console.log(error));

app.listen(8080, () => console.log('Server OK'));

