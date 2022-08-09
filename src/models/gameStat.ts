import { Model, Table, Column, AutoIncrement, PrimaryKey, NotEmpty, HasOne, ForeignKey, BelongsTo, AllowNull } from "sequelize-typescript";
import IGameStat from "../interfaces/models/IGameStat";
import User from "./user";

@Table({
    tableName: "games",
    timestamps: false,
    freezeTableName: true
})
class GameStat extends Model<IGameStat> implements IGameStat {
    @AutoIncrement
    @PrimaryKey
    @Column
    id: number

    @NotEmpty
    @AllowNull(false)
    @Column
    moveCount: number

    @AllowNull(false)
    @Column
    isWin: boolean;

    @AllowNull(false)
    @Column
    killed: number;

    @AllowNull(false)
    @Column
    lost: number;

    @ForeignKey(() => User)
    @AllowNull(false)
    @Column
    userId: number

    @BelongsTo(() => User)
    user: User
}

export default GameStat;