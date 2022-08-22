import { Table, Column, AutoIncrement, PrimaryKey, NotEmpty, ForeignKey, BelongsTo, Model, NotNull, BelongsToMany, HasMany, AllowNull, Unique } from "sequelize-typescript";
import GameStat from "./gameStat";
import { Statistic } from "./index";
import IUser from "./interfaces/IUser";


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
    @Unique
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