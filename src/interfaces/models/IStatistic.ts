import { User } from "../../models";
import IEntity from "./IEntity";

interface IStatistic extends IEntity{
    id: number
    test1: string
    user: User
}

export default IStatistic;