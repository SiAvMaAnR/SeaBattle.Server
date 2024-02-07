import { User } from '../../models';
import IEntity from './IEntity';

interface IGameStat extends IEntity {
  id: number;
  countMyMoves: number;
  countHits: number;
  countMisses: number;
  isWin: boolean;
  enemy: string;
  datetime: Date;
  user: User;
  userId: number;
}

export default IGameStat;
