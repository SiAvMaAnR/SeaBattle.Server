import IEntity from "./IEntity";

interface IUser extends IEntity {
    id: number,
    name: string,
    age: string
}

export default IUser;