import express from 'express';
import { errorHandler } from './middewares/error-handler.js';
import { initMongoDB } from './daos/mongodb/connection/db.js';
import productRouter from './routes/product-router.js';
const app = express();

//llevanto middelware que me permite manejar rutas complejas y el fomrato json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//declaro e inicializo las turas
app.use('/products', productRouter);

//error handler
app.use(errorHandler);


//coneccion BD
initMongoDB()
    .then(()=> console.log('Conectado a la base de datos'))
    .catch((error)=> console.log(error));

app.listen(8080, () => console.log('Server OK'));

