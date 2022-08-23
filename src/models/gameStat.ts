import { Model, Table, Column, AutoIncrement, PrimaryKey, NotEmpty, HasOne, ForeignKey, BelongsTo, AllowNull } from "sequelize-typescript";
import IGameStat from "./interfaces/IGameStat";
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
    countMyMoves: number

    @AllowNull(false)
    @Column
    isWin: boolean;

    @AllowNull(false)
    @Column
    countHits: number;

    @AllowNull(false)
    @Column
    countMisses: number;

    @AllowNull(false)
    @Column
    enemy: string;

    @ForeignKey(() => User)
    @AllowNull(false)
    @Column
    userId: number

    @BelongsTo(() => User)
    user: User
}

export default GameStat;