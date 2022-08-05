import { Model } from "sequelize/types";
import IEntity from "../models/IEntity";
import IRepository from "./IRepository";


interface IWrite<TEntity extends Model<any>> extends IRepository<TEntity> {
    add(entity: TEntity): Promise<boolean>;
    delete(id: number): Promise<boolean>;
}

export default IWrite;