import { UserModel } from'./models/user-model.js';
import MongoDao from './mongo-dao.js';

class UserMongoDao extends MongoDao{
    constructor(model){
        super(model);
    }
}

export const userDao= new UserMongoDao(UserModel);