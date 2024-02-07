import { IStatisticRes } from '../../business/game/data/statistic';
import GameStat from '../../models/gameStatistic';
import { ICommonStat, IGamesRes, IPagination } from '../statisticService';

interface IStatisticService {
  addGame(userId: number, props: IStatisticRes): Promise<void>;
  getGameById(userId: number, gameId: number): Promise<GameStat>;
  getGames(
    userId: number,
    pagination: IPagination,
    findField?: string,
    sortDate?: string
  ): Promise<IGamesRes>;
  getCommonStat(userId: number, field?: string): Promise<ICommonStat>;
}

export default IStatisticService;
