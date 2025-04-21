import { Schema, model } from "mongoose";

//Esquema de la coleccion productos
const ProductSchema = new Schema({
    name: { type: String, required: true },
    description: { type:String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required:true },
});

// exporto creando el modelo que no es mas que llamar al metodo model y pasarle el nombre de la colleccion
// y el escquema, con esto ya tenemos el modelo de producto, que apartir del productModel voy a tener todos 
//los metos de mongoose, para crear actualizar, eliminar, que nos abre la interaccion con la base de datos de mongos
export const ProductModel = model('products',ProductSchema);