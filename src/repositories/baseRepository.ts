import { Repository, Sequelize } from "sequelize-typescript";
import IWrite from "../interfaces/repositories/IWrite";
import IRead from "../interfaces/repositories/IRead";
import BaseModel from "../models/base";

abstract class BaseRepository<TEntity extends BaseModel> implements IWrite<TEntity>, IRead<TEntity> {

    protected repository: Repository<TEntity>;

    constructor(repository: Repository<TEntity>) {
        this.repository = repository;
    }

    public add(entity: TEntity): Promise<boolean> {
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

    public delete(id: number): Promise<boolean>;
    public delete(entity: TEntity): Promise<boolean>;
    public delete(arg: unknown): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}

export default BaseRepository;