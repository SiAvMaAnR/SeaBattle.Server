import { Table, Column, AutoIncrement, PrimaryKey, NotEmpty, ForeignKey, BelongsTo, Model, NotNull, BelongsToMany, HasMany, AllowNull } from "sequelize-typescript";
import IUser from "../interfaces/models/IUser";
import GameStat from "./gameStat";
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

    @AllowNull(false)
    @Column
    login: string

    @NotEmpty
    @AllowNull(false)
    @Column
    password: string

    @HasMany(() => GameStat)
    gameStatistics: GameStat[];
}

export default User;