import IEntity from "../interfaces/models/IEntity";
import { Model } from "sequelize-typescript";


class BaseModel extends Model<IEntity> implements IEntity{
    id: number;
}

export default BaseModel;