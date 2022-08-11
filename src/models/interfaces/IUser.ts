import GameStat from "../../models/gameStat";
import IEntity from "./IEntity";

interface IUser extends IEntity {
    login: string,
    password: string,
    gameStatistics: GameStat[]
}

export default IUser;