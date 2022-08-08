import { Table, Column, AutoIncrement, PrimaryKey, NotEmpty, ForeignKey, BelongsTo, Model, NotNull } from "sequelize-typescript";
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
    login: string

    @NotEmpty
    @Column
    password: string

    @ForeignKey(() => Statistic)
    @Column
    statisticId: number

    @BelongsTo(() => Statistic)
    statistic: Statistic
}

export default User;