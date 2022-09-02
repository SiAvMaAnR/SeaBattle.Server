import { Sequelize } from 'sequelize-typescript';
import { Op } from 'sequelize';
import { IStatisticRes } from '../business/game/data/statistic';
import sequelize from '../database/sequelize';
import GameStat from '../models/gameStatistic';
import StatisticRepository from '../repositories/statisticRepository';
import BaseService, { IJwtUser } from './baseService';
import IStatisticService from './interfaces/IStatisticService';

class StatisticService extends BaseService implements IStatisticService {
    private repository = new StatisticRepository(sequelize);

    public async addGame(userId: number, props: IStatisticRes): Promise<void> {
        await this.repository.create({
            countMyMoves: props.countMyMoves,
            countHits: props.countHits,
            countMisses: props.countMisses,
            isWin: props.isWin,
            enemy: props.enemy,
            userId: userId
        });
    }

    public async getGameById(userId: number, gameId: number): Promise<GameStat> {
        return await this.repository.getOne({
            where: {
                userId: userId,
                id: gameId
            }
        });
    }

    public async getGames(
        userId: number,
        findField?: string,
        page?: number,
        size?: number
    ): Promise<IGamesRes> {
        const field = findField ?? '';
        const limit = size ?? 1000;
        const offset = limit * (page ?? 0);

        const search = [
            {
                enemy: {
                    [Op.iLike]: `%${field}%`
                }
            },
            sequelize.where(
                sequelize.cast(sequelize.col('GameStat.countMyMoves'), 'varchar'),
                { [Op.iLike]: `%${field}%` }
            ),
            sequelize.where(
                sequelize.cast(sequelize.col('GameStat.countHits'), 'varchar'),
                { [Op.iLike]: `%${field}%` }
            ),
            sequelize.where(
                sequelize.cast(sequelize.col('GameStat.countMisses'), 'varchar'),
                { [Op.iLike]: `%${field}%` }
            )
        ];


        const where = {
            [Op.or]: search,
            userId: userId
        };

        const [countResult, gamesResult] = await Promise.allSettled([
            this.repository.count({
                where: where
            }),
            this.repository.get({
                where: where,
                order: [['datetime', 'DESC']],
                offset: offset,
                limit: limit
            })
        ]) as [PromiseFulfilledResult<number>, PromiseFulfilledResult<GameStat[]>];

        const count = countResult.value;
        const games = gamesResult.value;

        const pages = Math.ceil(count / limit);

        return { pages, games };
    }



    public async getCommonStat(
        userId: number,
        field?: string
    ): Promise<ICommonStat> {
        const search = [
            {
                enemy: {
                    [Op.iLike]: `%${field}%`
                }
            },
            sequelize.where(
                sequelize.cast(sequelize.col('GameStat.countMyMoves'), 'varchar'),
                { [Op.iLike]: `%${field}%` }
            ),
            sequelize.where(
                sequelize.cast(sequelize.col('GameStat.countHits'), 'varchar'),
                { [Op.iLike]: `%${field}%` }
            ),
            sequelize.where(
                sequelize.cast(sequelize.col('GameStat.countMisses'), 'varchar'),
                { [Op.iLike]: `%${field}%` }
            )
        ];

        const results = await Promise.allSettled([
            this.repository.sum('countMyMoves', {
                where: {
                    [Op.or]: search,
                    userId: userId
                }
            }),
            this.repository.count({
                where: {
                    [Op.or]: search,
                    userId: userId,
                    isWin: true
                }
            }),
            this.repository.count({
                where: {
                    [Op.or]: search,
                    userId: userId
                }
            }),
            this.repository.sum('countHits', {
                where: {
                    [Op.or]: search,
                    userId: userId
                }
            })
        ]) as PromiseFulfilledResult<number>[];

        const [sumMoves, countWins, countGames, sumHits] = results.map(result => result.value);

        return {
            sumMoves: sumMoves,
            countWins: countWins,
            countGames: countGames,
            sumHits: sumHits
        };
    }
}

interface ICommonStat {
    sumMoves: number;
    countWins: number;
    countGames: number;
    sumHits: number;
}

interface IGamesRes {
    pages: number;
    games: GameStat[];
}

export { ICommonStat, IGamesRes };
export default StatisticService;
