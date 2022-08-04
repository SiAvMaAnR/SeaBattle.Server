import { DataType, Model, Table, Column, AutoIncrement, PrimaryKey, NotEmpty } from "sequelize-typescript";
import { mapValueFieldNames } from "sequelize/types/utils";
import sequelize from "../sequelize/sequelize";

interface IUser {
    id:number,
    name: string,
    age: number
}


@Table({
    tableName: "users",
    timestamps: false,
    freezeTableName: true
})
class User extends Model<User> implements IUser {

    @AutoIncrement
    @PrimaryKey
    @Column
    id: number

    @NotEmpty
    @Column
    name: string

    @NotEmpty
    @Column
    age: number
}

export default User;