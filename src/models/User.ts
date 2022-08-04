import { DataType, Model, Table, Column, AutoIncrement, PrimaryKey, NotEmpty } from "sequelize-typescript";
import IUser from "../interfaces/models/IUser";

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
    age: string
}

export default User;