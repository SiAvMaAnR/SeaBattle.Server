import BaseRepository from './baseRepository';
import { Statistic, User } from '../models';
import { Sequelize } from 'sequelize-typescript';
import IGameStat from '../models/interfaces/IGameStat';

class StatisticRepository extends BaseRepository<Statistic> {
  public constructor(sequelize: Sequelize) {
    super(sequelize.getRepository(Statistic));
  }

  public async count(countOptions?: Record<string, any>): Promise<number> {
    return await this.repository.count(countOptions);
  }

  public async sum(
    field: keyof IGameStat,
    countOptions?: Record<string, any>
  ): Promise<number> {
    return await this.repository.sum(field, countOptions);
  }

  public async max(
    field: keyof IGameStat,
    maxOptions?: Record<string, any>
  ): Promise<number> {
    return await this.repository.max(field, maxOptions);
  }

  public async min(
    field: keyof IGameStat,
    minOptions?: Record<string, any>
  ): Promise<number> {
    return await this.repository.min(field, minOptions);
  }
}

export default StatisticRepository;
