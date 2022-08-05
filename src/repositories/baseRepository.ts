import { Model, Repository, Sequelize } from "sequelize-typescript";
import IWrite from "../interfaces/repositories/IWrite";
import IRead from "../interfaces/repositories/IRead";
import IEntity from "../interfaces/models/IEntity";
import sequelize from "../sequelize/sequelize";
import { User } from "../models";

abstract class BaseRepository<TEntity extends Model<IEntity>> implements IWrite<TEntity>, IRead<TEntity> {

    protected repository: Repository<TEntity>;

    constructor(repository: Repository<TEntity>) {
        this.repository = repository;
    }


    public async add(entity: TEntity): Promise<boolean> {

        // await this.repository.create(entity);
        throw new Error("Method not implemented.");
    }

    public async getOne(id: number): Promise<TEntity> {
        const elements = await this.repository.findAll();
        return elements.find(el => el.id == id) ?? null;
    }

    public async getAll(): Promise<TEntity[]>;
    public async getAll(fn): Promise<TEntity[]>;
    public async getAll(arg?: unknown): Promise<TEntity[]> {
        const users = await this.repository.findAll();

        return (arg && arg instanceof Function)
            ? users.filter((el) => arg(el))
            : users;
    }

    public async delete(id: number): Promise<boolean> {

        const repo = sequelize.getRepository(User);
        repo.destroy({
            where:{
                id: 100
            }
        })
        await this.repository.destroy({     });
      

        throw new Error("Method not implemented.");
    }
}

export default BaseRepository;