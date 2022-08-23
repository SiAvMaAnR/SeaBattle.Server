import { IStatisticRes } from "../business/game/data/statistic";
import sequelize from "../database/sequelize";
import GameStat from "../models/gameStat";
import StatisticRepository from "../repositories/statisticRepository";
import IStatisticService from "./interfaces/IStatisticService";


interface IGameStat {
    countMyMoves: number,
    countHits: number,
    countMisses: number,
    isWin: boolean,
    enemy: string
}

class StatisticService implements IStatisticService {
    private repository = new StatisticRepository(sequelize);

    public async addGame(userId: number, props: IStatisticRes) {
        const gameStat = await this.repository.create({
            countMyMoves: props.countMyMoves,
            countHits: props.countHits,
            countMisses: props.countMisses,
            isWin: props.isWin,
            enemy: props.enemy,
            userId: userId
        });
    }

    public async getGameById(id: number): Promise<GameStat> {
        return await this.repository.getOneByPk(id);
    }

    public async getGames(): Promise<GameStat[]> {
        return await this.repository.getAll();
    }
}

export default StatisticService;