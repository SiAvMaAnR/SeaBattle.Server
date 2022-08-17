import BaseService from "./baseService";
import Coordinate from "../types/coordinate";
import IGameService from "./interfaces/IGameService";
import { Cell } from "../business/game/fields/field";
import Game from "../business/game/game";

class GameService extends BaseService implements IGameService {

    private socketId: string;
    private game: Game = null;

    constructor(socketId: string) {
        super();
        this.socketId = socketId;
    }

    public createGame(){

    }

    
}

export default GameService;