import Player from '../data/player';
import Room from '../data/room';

interface ICore {
  get rooms(): Room[];
  getRoomById(roomId: string): Room;
  getRoomByPlayer(socketId: string): Room;
  getMyPlayer(socketId: string): Player;
  getEnemyPlayer(socketId: string): Player;
  addRoom(roomId: string): boolean;
  removeRoom(roomId: string): void;
  removeEmptyRooms(): void;
  isExistsRoom(roomId: string): boolean;
}

export default ICore;
