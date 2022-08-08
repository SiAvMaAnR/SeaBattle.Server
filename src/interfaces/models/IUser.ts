import IEntity from "./IEntity";

interface IUser extends IEntity {
    login: string,
    password: string,
    statisticId: number
}

export default IUser;