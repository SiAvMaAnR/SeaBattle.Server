import IEntity from "./IEntity";

interface IUser extends IEntity {
    name: string,
    age: number
}

export default IUser;