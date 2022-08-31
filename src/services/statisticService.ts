import { Sequelize } from "sequelize-typescript";
import { Op } from "sequelize";
import { IStatisticRes } from "../business/game/data/statistic";
import sequelize from "../database/sequelize";
import GameStat from "../models/gameStat";
import StatisticRepository from "../repositories/statisticRepository";
import BaseService, { IJwtUser } from "./baseService";
import IStatisticService from "./interfaces/IStatisticService";


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

    public async getGames(userId: number, findField?: string, page?: number, size?: number): Promise<GameStat[]> {

        const field = findField ?? "";
        const limit = size ?? 1000;
        const offset = limit * (page ?? 0);

        console.log("limit", limit);
        console.log("offset", offset);


        return await this.repository.get({
            where: {
                [Op.or]: [
                    {
                        enemy: {
                            [Op.iLike]: `%${field}%`
                        }
                    },
                    sequelize.where(sequelize.cast(sequelize.col('GameStat.countMyMoves'), 'varchar'), { [Op.iLike]: `%${field}%` }),
                    sequelize.where(sequelize.cast(sequelize.col('GameStat.countHits'), 'varchar'), { [Op.iLike]: `%${field}%` }),
                    sequelize.where(sequelize.cast(sequelize.col('GameStat.countMisses'), 'varchar'), { [Op.iLike]: `%${field}%` }),
                    sequelize.where(sequelize.literal('to_char(("GameStat"."datetime"::timestamptz") , \'DD.MM.YYYY, HH24:MI:SS\')'), { [Op.like]: `%${field}%` },)
                    // sequelize.where(sequelize.cast(sequelize.col('GameStat.datetime'), 'varchar'), { [Op.iLike]: `%${field}%` }),
                ],

                userId: userId
            },
            order: [
                ['datetime', 'DESC'],
            ],
            offset: offset,
            limit: limit
        });
    }

    public async getCommonStat(userId: number, field?: string): Promise<ICommonStat> {

        const search = ([
            {
                enemy: {
                    [Op.iLike]: `%${field}%`
                }
            },
            sequelize.where(sequelize.cast(sequelize.col('GameStat.countMyMoves'), 'varchar'), { [Op.iLike]: `%${field}%` }),
            sequelize.where(sequelize.cast(sequelize.col('GameStat.countHits'), 'varchar'), { [Op.iLike]: `%${field}%` }),
            sequelize.where(sequelize.cast(sequelize.col('GameStat.countMisses'), 'varchar'), { [Op.iLike]: `%${field}%` }),
        ]);

        const sumMoves = await this.repository.sum('countMyMoves', {
            where: {
                [Op.or]: search,
                userId: userId,
            },
        });

        const countWins = await this.repository.count({
            where: {
                [Op.or]: search,
                userId: userId,
                isWin: true
            }
        });

        const countGames = await this.repository.count({
            where: {
                [Op.or]: search,
                userId: userId,
            }
        });

        const sumHits = await this.repository.sum('countHits', {
            where: {
                [Op.or]: search,
                userId: userId,
            }
        });

        return {
            sumMoves: sumMoves,
            countWins: countWins,
            countGames: countGames,
            sumHits: sumHits
        }
    }
}

interface ICommonStat {
    sumMoves: number,
    countWins: number,
    countGames: number,
    sumHits: number
}

export { ICommonStat };
export default StatisticService;