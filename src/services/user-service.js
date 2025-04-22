import { userDao } from "../daos/mongodb/user-dao.js";
import CustomError from "../utils/custom-error.js";
import bcrypt from 'bcrypt';

class UserService {
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
            const user = await this.dao.getById(id); // esto me puede devolver el user o un null
            if(!user) throw new CustomError('User Not Found', 404); // si no me llega el user lanzo un error custom con el mensaje y codigo que creo conveniente
            return user;// sino retorno el user
        } catch (error) {
            throw(error) // y aca no lanzo un nuevo error sino que transmito el que genero en la linea anterior porque si lanzo uno nuevo lo voy a estar pisando
        }
    }

    create = async(body) => {
        try {
            if (!body.password) throw new CustomError('Password is required', 400);
    
            // Hashear la contraseña
            const hashedPassword = bcrypt.hashSync(body.password, 10); // saltRounds = 10
    
            // Reemplazamos el password plano con el hash
            const userData = {
                ...body,
                password: hashedPassword
            };
    
            const newUser = await this.dao.create(userData);
    
            if (!newUser) throw new CustomError('Error creating user', 400);
    
            return newUser;
        } catch (error) {
            throw (error);
        }
    }
    
    update = async(id, body)=>{
        try {
            const userUpd = await this.dao.update(id,body);// aca podemos llegar a tener un error porque si le pasamos un id que no existe me puede devolver un null y si le paso un body que tiene algo mal tambien 
            if(!userUpd) throw new CustomError('Error updating User', 400);
            return userUpd;
        } catch (error) {
            throw(error)
        }
    }

    delete = async(id)=>{
        try {
            const userDel= await this.dao.delete(id);
            if(!userDel) throw new CustomError('Error deleted user', 400);
            return userDel;
        } catch (error) {
            throw (error);
        }
    };

    getByEmail = async(email) => {
        try {
            return await this.dao.getByEmail(email);
        } catch (error) {
            throw error;
        }
    };
}

export const userService = new UserService(userDao);
