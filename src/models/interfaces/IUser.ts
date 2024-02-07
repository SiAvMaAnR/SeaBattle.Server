import GameStat from '../gameStatistic';
import IEntity from './IEntity';

interface IUser extends IEntity {
  login: string;
  password: string;
  gameStatistics: GameStat[];
}

export default IUser;
