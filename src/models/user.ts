import { Table, Column, AutoIncrement, PrimaryKey, NotEmpty, ForeignKey, BelongsTo } from "sequelize-typescript";
import IEntity from "../interfaces/models/IEntity";
import BaseModel from "./base";
import { Statistic } from "./index";


@Table({
    tableName: "users",
    timestamps: false,
    freezeTableName: true
})
class User extends BaseModel implements IEntity {

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