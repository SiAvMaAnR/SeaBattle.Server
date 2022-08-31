import { IStatisticRes } from "../../business/game/data/statistic";
import GameStat from "../../models/gameStat";
import { IJwtUser } from "../baseService";
import { ICommonStat } from "../statisticService";

interface IStatisticService {
    addGame(userId: number, props: IStatisticRes): Promise<void>;
    getGameById(userId: number, gameId: number): Promise<GameStat>;
    getGames(userId: number, findField: string, page?: number, size?: number): Promise<GameStat[]>;
    getCommonStat(userId: number, field?: string): Promise<ICommonStat>;
}


export default IStatisticService;