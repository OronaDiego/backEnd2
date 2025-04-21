export default class MongoDao {
    //Clase base, clase Padre de mongo con los metos basicos del crud de mongoose
    constructor(model){ // 
        this.model = model;
    }

    getAll = async() =>{
        try {
            return await this.model.find({});
        } catch (error) {
            throw new Error(error)
        }
    };

    getById = async(id) =>{
        try {
            return await this.model.findById(id)
        } catch (error) {
            throw new Error(error)
        }
    };

    create = async(body) =>{
        try {
            return await this.model.create(body);
        } catch (error) {
            throw new Error(error)
        }
    };

    update = async(id, body) =>{
        try {    // new en true es para que devuelva el documento ya actualizado
            return await this.model.findByIdAndUpdate(id,body, { new: true})
        } catch (error) {
            throw new Error(error)
        }
    };

    delete = async(id) =>{
        try {
            return await this.model.findByIdAndDelete(id)
        } catch (error) {
            throw new Error(error)
        }
    };
}