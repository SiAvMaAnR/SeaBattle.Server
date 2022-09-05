import Room from '@/business/game/data/room';
import IRoomResponse from '@/business/game/interfaces/IRoomResponse';
import PairPlayers from '@/business/game/types/PairPlayers';
import PlayersResponse from '@/business/game/types/PlayersResponse';

class Adapter {
  public static roomResponse(room: Room): IRoomResponse {
    return {
      id: room.id,
      count: room.count
    };
  }

  
  public static playersResponse(players: PairPlayers): PlayersResponse {
    return {
      my: {
        socket: players?.my?.socketId,
        init: players?.my?.isInit,
        ready: players?.my?.isReady
      },
      enemy: {
        socket: players?.enemy?.socketId,
        init: players?.enemy?.isInit,
        ready: players?.enemy?.isReady
      }
    };
  }
}

export default Adapter;
