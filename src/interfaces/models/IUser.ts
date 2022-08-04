import IEntity from "./IEntity";

interface IUser extends IEntity {
    id: number,
    name: string,
    age: number
}

export default IUser;