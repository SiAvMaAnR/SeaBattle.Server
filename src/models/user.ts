import { Model, Table, Column, AutoIncrement, PrimaryKey, NotEmpty, HasOne, ForeignKey, BelongsTo } from "sequelize-typescript";
import IEntity from "../interfaces/models/IEntity";
import IUser from "../interfaces/models/IUser";
import { Statistic } from "./index";

@Table({
    tableName: "users",
    timestamps: false,
    freezeTableName: true
})
class User extends Model implements IUser {

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

    @ForeignKey(() => Statistic)
    @Column
    statisticId: number

    @BelongsTo(() => Statistic)
    statistic: Statistic
}

export default User;