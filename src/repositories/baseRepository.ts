import { Model, Repository, Sequelize } from "sequelize-typescript";
import IWrite from "../interfaces/repositories/IWrite";
import IRead from "../interfaces/repositories/IRead";
import IEntity from "../interfaces/models/IEntity";

abstract class BaseRepository<TEntity extends Model<IEntity>> implements IWrite<TEntity>, IRead<TEntity> {

    protected repository: Repository<TEntity>;

    constructor(repository: Repository<TEntity>) {
        this.repository = repository;
    }

    public async create(entity: any): Promise<void> {
        try {
            await this.repository.create<TEntity>(entity);
        }
        catch (err){
            throw err;
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
            throw err;
        }
    }

    public async getAll(): Promise<TEntity[]>;
    public async getAll(fn: Function): Promise<TEntity[]>;
    public async getAll(arg?: unknown): Promise<TEntity[]> {
        try {
            const users = await this.repository.findAll();

            return (arg && arg instanceof Function)
                ? users.filter((el) => arg(el))
                : users;
        }
        catch (err) {
            throw err;
        }
    }


    public async delete(entity: TEntity): Promise<void>;
    public async delete(id: number): Promise<void>;
    public async delete(arg: unknown): Promise<void> {
        try {
            if (arg instanceof Model<IEntity>) {
                await arg.destroy();
            }
            else if (typeof arg == "number") {
                const item = await this.getOne(arg);
                await item.destroy();
            }
        }
        catch (err) {
            throw err;
        }
    }
}

export default BaseRepository;