import { Sequelize } from "sequelize-typescript";
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

    public async getGames(userId: number): Promise<GameStat[]> {
        return await this.repository.get({
            where: {
                userId: userId
            },
        });
    }

    public async getCommonStat(userId: number): Promise<any> {

        const sumMoves = await this.repository.sum('countMyMoves', {
            where: {
                userId: userId,
            },
        });

        const countWins = await this.repository.count({
            where: {
                userId: userId,
                isWin: true
            }
        });

        const countGames = await this.repository.count({
            where: {
                userId: userId,
            }
        });

        const sumHits = await this.repository.sum('countHits', {
            where: {
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

export default StatisticService;