import { User } from "../../models";
import IEntity from "./IEntity";

interface IGameStat extends IEntity {
    id: number
    moveCount: number
    isWin: boolean
    killed: number
    lost: number
    user: User
}

export default IGameStat;