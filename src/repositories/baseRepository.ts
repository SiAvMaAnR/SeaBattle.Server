import { Model, Repository } from "sequelize-typescript";
import IWrite from "../interfaces/repositories/IWrite";
import IRead from "../interfaces/repositories/IRead";
import IEntity from "../interfaces/models/IEntity";
import { MakeNullishOptional } from "sequelize/types/utils";

abstract class BaseRepository<TEntity extends Model<IEntity>> implements IWrite<TEntity>, IRead<TEntity> {

    protected repository: Repository<TEntity>;

    constructor(repository: Repository<TEntity>) {
        this.repository = repository;
    }

    public async create(entity: MakeNullishOptional<TEntity["_creationAttributes"]>): Promise<TEntity> {
        try {
            return await this.repository.create<TEntity>(entity);
        }
        catch (err) {
            return null;
        }
    }

    public async getOne(id: any): Promise<TEntity> {
        try {
            return await this.repository.findOne({
                where: {
                    id: id
                }
            });
        }
        catch (err) {
            return null;
        }
    }

    public async getAll(fn?: Function): Promise<TEntity[]> {
        try {
            const users = await this.repository.findAll();

            return (fn)
                ? users.filter((el) => fn(el))
                : users;
        }
        catch (err) {
            return null;
        }
    }


    public async delete(entity: TEntity): Promise<boolean>;
    public async delete(id: number): Promise<boolean>;
    public async delete(arg: unknown): Promise<boolean> {
        try {
            if (arg instanceof Model<IEntity>) {
                await arg.destroy();
            }
            else if (typeof arg == "number") {
                const item = await this.getOne(arg);
                await item.destroy();
            }
            return true;
        }
        catch (err) {
            return false;
        }
    }

}

export default BaseRepository;