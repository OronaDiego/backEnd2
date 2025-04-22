import express from 'express';
import { errorHandler } from './middewares/error-handler.js';
import { initMongoDB } from './daos/mongodb/connection/db.js';
import userRoutes from './routes/user-routes.js';
import authRoutes from './routes/auth-routes.js';
import './config/passport.config.js';
const app = express();

//llevanto middelware que me permite manejar rutas complejas y el fomrato json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Inicializo Passport
app.use(passport.initialize());


//declaro e inicializo las turas
app.use('/api/auth', authRoutes);   // login/register
app.use('/api/users', userRoutes);  // resto de rutas 



//error handler
app.use(errorHandler);


//coneccion BD
initMongoDB()
    .then(()=> console.log('Conectado a la base de datos'))
    .catch((error)=> console.log(error));

app.listen(8080, () => console.log('Server OK'));

