import { Model } from "sequelize/types";
import IRepository from "./IRepository";


interface IRead<TEntity extends Model> extends IRepository<TEntity> {
    getOne(id: number): (Promise<TEntity>);
    getAll(fn?: Function): Promise<TEntity[]>;
}

export default IRead;