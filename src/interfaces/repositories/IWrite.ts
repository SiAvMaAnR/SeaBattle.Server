import { Model } from "sequelize/types";
import IEntity from "../models/IEntity";
import IRepository from "./IRepository";


interface IWrite<TEntity extends Model<any>> extends IRepository<TEntity> {
    create(entity: TEntity): Promise<void>;
    delete(entity: TEntity): Promise<void>;
    delete(id: number): Promise<void>;
}

export default IWrite;