import IEntity from "../interfaces/models/IEntity";
import { Repository, Sequelize } from "sequelize-typescript";
import IWrite from "../interfaces/repositories/IWrite";
import IRead from "../interfaces/repositories/IRead";
import sequelize from "../sequelize/sequelize";
import { User } from "../models";
import { Model } from "sequelize/types";

abstract class BaseRepository<TEntity extends Model> implements IWrite<TEntity>, IRead<TEntity> {

    protected repository: Repository<TEntity>;

    constructor(repository: Repository<TEntity>) {
        this.repository = repository;
    }

    public add(entity: TEntity): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

    public async getOne(id: number): Promise<TEntity>;
    public async getOne(fn: Function): Promise<TEntity>;
    public async getOne(arg: unknown): Promise<TEntity> {
        if (typeof arg == 'number') {


            sequelize.getRepository(User)

            const a = await this.repository.findAll();
            return a.find(x=>x);
        }
    }

    public getAll(): Promise<TEntity[]>;
    public getAll(fn: Function): Promise<TEntity[]>;
    public getAll(arg?: unknown): Promise<TEntity[]> {
        throw new Error("Method not implemented.");
    }

    public delete(id: number): Promise<boolean>;
    public delete(entity: TEntity): Promise<boolean>;
    public delete(arg: unknown): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}

export default BaseRepository;