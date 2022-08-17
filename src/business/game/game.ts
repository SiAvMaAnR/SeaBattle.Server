import { Core } from "./data/core";
import EnemyField from "./fields/enemyField";
import EnemyGameData from "./fields/enemyField";


class Game {
    private core: Core;

    constructor(core: Core) {
        this.core = core;
    }


    public joinRoom(roomId: string) {
        this.core.getRoom(roomId).addPlayer();
    }

    public createRoom(){

    }

}

export default Game;