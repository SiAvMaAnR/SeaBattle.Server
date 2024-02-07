import Player from '../../business/game/data/player';
import { IStatisticRes } from '../../business/game/data/statistic';
import { Coordinate } from '../../business/game/fields/field';
import IRoomResponse from '../../business/game/interfaces/IRoomResponse';
import IPlayersResponse from '../../business/game/interfaces/IPlayersResponse';
import { IJwtUser } from '../baseService';

interface IGameService {
  joinRoom(roomId: string, login: string): boolean;
  leaveRoom(): void;
  getRooms(): IRoomResponse[];
  getRoomById(roomId: string): IRoomResponse;
  getRoomByPlayer(): IRoomResponse;
  getPlayers(): IPlayersResponse;
  isFullRoom(): boolean;
  getMyField(): number[][];
  getEnemyField(): number[][];
  initMyField(field: number[][]): number[][];
  getIsMove(): boolean;
  moveGen(condition: boolean): boolean;
  checkWin(): boolean;
  shoot(coordinate: Coordinate): boolean;
  setIsStart(isStart: boolean): void;
  isEnd(): boolean;
  setIsEnd(isEnd: boolean): void;
  setIsReady(ready: boolean): void;
  setIsInit(init: boolean): void;
  setIsAccess(access: boolean): void;
  getStatistic(): IStatisticRes;
  saveResult(isWon: boolean): void;
  setUser(user: IJwtUser);
  getEnemy(): Player;
  get user(): IJwtUser;
}

export default IGameService;
