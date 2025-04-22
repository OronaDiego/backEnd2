import { userService } from "../services/user-service";

class UserController{
    constructor(service){
        this.service = service;
    }
    getAll = async(req,res,next)=>{
        try {
            const response = await this.service.getAll();
            res.status(200).json(response);
        } catch (error) {
            next(error);
        }
    }
    getBayId = async(req,res,next)=>{
        try {
            const { id } = req.params;
            const response = await this.service.getBayId(id);
            res.status(200).json(response);
        } catch (error) {
            next(error);
        }
    }
    create = async(req,res,next)=>{
        try {
            const response = await this.service.create(req.body);
            res.json(response);
        } catch (error) {
            next(error);
        }
    }
    update = async(req,res,next)=>{
        try {
            const { id }= req.params;
            const response = await this.service.update(id, req.body);
            res.status(201).json(response);
        } catch (error) {
            next(error);
        }
    }
    delete = async(req,res,next)=>{
        try {
            const { id }= req.params;
            const response = await this.service.delete(id);
            res.status(201).json(response);
        } catch (error) {
            next(error);
        }
    };
}
export const userController = new UserController(userService);