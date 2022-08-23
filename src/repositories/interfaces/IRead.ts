import { Model } from "sequelize/types";
import IRepository from "./IRepository";


interface IRead<TEntity extends Model> extends IRepository<TEntity> {
    getOneByPk(id: number): (Promise<TEntity>);
    get(where: Record<string, any>): Promise<TEntity[]>;
    getOne(where?: Record<string, any>): Promise<TEntity>;
    getAll(): Promise<TEntity[]>;
}

export default IRead;