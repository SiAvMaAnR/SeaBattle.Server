import BaseService from "./baseService";
import Coordinate from "../types/coordinate";
import IGameService from "./interfaces/IGameService";
import { Cell } from "../business/game/fields/field";

class GameService extends BaseService implements IGameService {

    

    constructor() {
        super();
    }

    
}

export default GameService;