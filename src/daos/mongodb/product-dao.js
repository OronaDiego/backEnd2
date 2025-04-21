import { ProductModel } from "./models/product-model";
import MongoDao from "./mongo-dao";

class ProductMongoDao extends MongoDao { 
    // mongo dao esta esperando el modelo y se lo paso a la clase padre con el super()
    constructor(model){
        super(model); // el super es para pasarle el parametro que recibo en el constructor
    }//y pasarselo a la clase padre
    //con esto ya tenemos hereddados todos los metodos
}

//exporto productDao con la clase instanciada y pasarle el modelo que esta esperando
export const productDao = new ProductMongoDao(ProductModel);
// a partir de esto tengo el productDao con los metodos que cree en la clase padre
