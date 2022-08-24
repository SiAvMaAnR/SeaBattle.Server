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
            }
        });
    }



}

export default StatisticService;