import { Model } from "sequelize/types";
import BaseModel from "../../models/base";
import IEntity from "../models/IEntity";
import IRepository from "./IRepository";


interface IRead<TEntity extends Model> extends IRepository<TEntity> {
    getOne(id: number): (Promise<TEntity>);
    getAll(): Promise<TEntity[]>;
    getAll(fn: Function): Promise<TEntity[]>;
}

export default IRead;