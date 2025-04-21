import { productDao } from "../daos/mongodb/product-dao.js"
import CustomError from "../utils/custom-error.js"

class ProductService {
    constructor(dao){
        this.dao = dao
    }

    getAll = async() =>{
        try {
            return await this.dao.getAll
        } catch (error) {
            throw new Error(error)
        }
    }
    // el dao es el mongo-dao, la clase padre
    // es una cadena desde el servicio llamamos al dao/clase padre y el dao llama al metodo del mongoose

    getById = async(id) =>{
        try {
            const product = await this.dao.getById(id); // esto me puede devolver el producto o un null
            if(!product) throw new CustomError('Product Not Found', 404); // si no me llega el producto lanzo un error custom con el mensaje y codigo que creo conveniente
            return product;// sino retorno el producto
        } catch (error) {
            throw(error) // y aca no lanzo un nuevo error sino que transmito el que genero en la linea anterior porque si lanzo uno nuevo lo voy a estar pisando
        }
    }

    create = async(body)=>{
        try {
            const newProd = await this.dao.create(body); // esto puede dar un error y devolver un null si hay un error en validacion, esquema o tipo de dato, etc
            if(!newProd) throw new CustomError('Error creating product', 400); // 400 bad request, error con los datos que envia
            return newProd;
        } catch (error) {
            throw(error)
        }
    }

    update = async(id, body)=>{
        try {
            const prodUpd = await this.dao.update(id,body);// aca podemos llegar a tener un error porque si le pasamos un id que no existe me puede devolver un null y si le paso un body que tiene algo mal tambien 
            if(!prodUpd) throw new CustomError('Error updating Product', 400);
            return prodUpd;
        } catch (error) {
            throw(error)
        }
    }

    delete = async(id)=>{
        try {
            const prodDel= await this.dao.delete(id);
            if(!prodDel) throw new CustomError('Error deleted product', 400);
            return prodDel;
        } catch (error) {
            throw (error);
        }
    };
}

export const productService = new ProductService(productDao);