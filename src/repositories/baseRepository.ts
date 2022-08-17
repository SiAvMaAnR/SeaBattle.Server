import { Model, Repository } from "sequelize-typescript";
import IRead from "./interfaces/IRead";
import IEntity from "../models/interfaces/IEntity";
import { MakeNullishOptional } from "sequelize/types/utils";
import IWrite from "./interfaces/IWrite";
import { Attributes, NonNullFindOptions } from "sequelize/types";

abstract class BaseRepository<TEntity extends Model<IEntity>> implements IWrite<TEntity>, IRead<TEntity> {

    protected repository: Repository<TEntity>;

    constructor(repository: Repository<TEntity>) {
        this.repository = repository;
    }

    public async create(entity: MakeNullishOptional<TEntity["_creationAttributes"]>): Promise<TEntity> {
        try {
            return await this.repository.create(entity);
        }
        catch (err) {
            return null;
        }
    }

    public async getOne(id: number): Promise<TEntity> {
        try {
            return await this.repository.findByPk(id);
        }
        catch (err) {
            return null;
        }
    }

    public async get(where?: Record<string, any>): Promise<TEntity[]> {
        try {
            return await this.repository.findAll({
                where
            });
        }
        catch (err) {
            return null;
        }
    }

    public async getAll(): Promise<TEntity[]> {
        try {
            return await this.repository.findAll();
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