import { Model } from "sequelize/types";
import IRepository from "./IRepository";


interface IRead<TEntity extends Model> extends IRepository<TEntity> {
    getOne(id: number): (Promise<TEntity>);
    get(fn: Function): Promise<TEntity[]>;
    getAll(): Promise<TEntity[]>;
}

export default IRead;