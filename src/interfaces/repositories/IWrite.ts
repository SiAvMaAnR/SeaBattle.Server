import { Model } from "sequelize/types";
import IRepository from "./IRepository";


interface IWrite<TEntity extends Model<any>> extends IRepository<TEntity> {
    create(entity: TEntity): Promise<TEntity>;
    delete(entity: TEntity): Promise<void>;
    delete(id: number): Promise<void>;
}

export default IWrite;