import { Table, Column, AutoIncrement, PrimaryKey, NotEmpty, ForeignKey, BelongsTo, Model } from "sequelize-typescript";
import IUser from "../interfaces/models/IUser";
import { Statistic } from "./index";


@Table({
    tableName: "users",
    timestamps: false,
    freezeTableName: true
})
class User extends Model<IUser> implements IUser {

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