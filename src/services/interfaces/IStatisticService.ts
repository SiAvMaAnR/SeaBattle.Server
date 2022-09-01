import { IStatisticRes } from '../../business/game/data/statistic';
import GameStat from '../../models/gameStatistic';
import { IJwtUser } from '../baseService';
import { ICommonStat, IGamesRes } from '../statisticService';

interface IStatisticService {
  addGame(userId: number, props: IStatisticRes): Promise<void>;
  getGameById(userId: number, gameId: number): Promise<GameStat>;
  getGames(
    userId: number,
    findField?: string,
    page?: number,
    size?: number
  ): Promise<IGamesRes>;
  getCommonStat(userId: number, field?: string): Promise<ICommonStat>;
}

export default IStatisticService;
