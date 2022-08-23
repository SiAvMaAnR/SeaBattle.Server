import sequelize from "../database/sequelize";
import GameStat from "../models/gameStat";
import StatisticRepository from "../repositories/statisticRepository";
import IStatisticService from "./interfaces/IStatisticService";


interface IGameStat {

}

class StatisticService implements IStatisticService {
    private repository = new StatisticRepository(sequelize);

    public addGame({ }: IGameStat) {

    }

    public async getGameById(id: number): Promise<GameStat> {
        return await this.repository.getOneByPk(id);
    }

    public async getGames(): Promise<GameStat[]> {
        return await this.repository.getAll();
    }
}

export default StatisticService;