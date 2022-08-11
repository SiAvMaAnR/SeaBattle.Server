import { Model } from "sequelize/types";
import { MakeNullishOptional } from "sequelize/types/utils";
import IRepository from "./IRepository";


interface IWrite<TEntity extends Model<any>> extends IRepository<TEntity> {
    create(entity: MakeNullishOptional<TEntity["_creationAttributes"]>): Promise<TEntity>;
    delete(entity: TEntity): Promise<boolean>;
    delete(id: number): Promise<boolean>;
}

export default IWrite;