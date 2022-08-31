import { IStatisticRes } from "../../business/game/data/statistic";
import GameStat from "../../models/gameStat";
import { IJwtUser } from "../baseService";

interface IStatisticService {
    addGame(userId: number, props: IStatisticRes): Promise<void>;
    getGameById(userId: number, gameId: number): Promise<GameStat>;
    getGames(userId: number, findField: string, page?: number, size?: number): Promise<GameStat[]>;
    getCommonStat(userId: number): Promise<any>;
}


export default IStatisticService;