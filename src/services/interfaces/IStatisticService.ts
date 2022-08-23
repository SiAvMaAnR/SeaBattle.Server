import GameStat from "../../models/gameStat";

interface IStatisticService {
    getGameById(id: number): Promise<GameStat>;
    getGames(): Promise<GameStat[]>;
}


export default IStatisticService;