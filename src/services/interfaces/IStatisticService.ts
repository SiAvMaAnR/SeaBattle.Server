import { IStatisticRes } from "../../business/game/data/statistic";
import GameStat from "../../models/gameStat";

interface IStatisticService {
    addGame(userId: number, props: IStatisticRes): Promise<void>;
    getGameById(userId: number, id: number): Promise<GameStat>;
    getGames(userId: number): Promise<GameStat[]>;


}


export default IStatisticService;