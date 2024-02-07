import { Model, Repository } from 'sequelize-typescript';
import IRead from './interfaces/IRead';
import IEntity from '../models/interfaces/IEntity';
import { MakeNullishOptional } from 'sequelize/types/utils';
import IWrite from './interfaces/IWrite';

abstract class BaseRepository<TEntity extends Model<IEntity>>
  implements IWrite<TEntity>, IRead<TEntity>
{
  protected repository: Repository<TEntity>;

  constructor(repository: Repository<TEntity>) {
    this.repository = repository;
  }

  public async create(
    entity: MakeNullishOptional<TEntity['_creationAttributes']>
  ): Promise<TEntity> {
    try {
      return await this.repository.create(entity);
    } catch (err) {
      return null;
    }
  }

  public async getOneByPk(id: number): Promise<TEntity> {
    try {
      return await this.repository.findByPk(id);
    } catch (err) {
      return null;
    }
  }

  public async getOne(findOptions?: Record<string, any>): Promise<TEntity> {
    try {
      return await this.repository.findOne(findOptions);
    } catch (err) {
      return null;
    }
  }

  public async get(findOptions?: Record<string, any>): Promise<TEntity[]> {
    try {
      return await this.repository.findAll(findOptions);
    } catch (err) {
      return null;
    }
  }

  public async getAll(): Promise<TEntity[]> {
    try {
      return await this.repository.findAll();
    } catch (err) {
      return null;
    }
  }

  public async delete(entity: TEntity): Promise<boolean> {
    try {
      await entity.destroy();
      return true;
    } catch (err) {
      return false;
    }
  }

  public async deleteByPk(id: number): Promise<boolean> {
    try {
      const item = await this.getOneByPk(id);
      await item.destroy();
      return true;
    } catch (err) {
      return false;
    }
  }
}

export default BaseRepository;
