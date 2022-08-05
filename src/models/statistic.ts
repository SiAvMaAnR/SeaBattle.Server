import { Model, Table, Column, AutoIncrement, PrimaryKey, NotEmpty, HasOne } from "sequelize-typescript";
import IStatistic from "../interfaces/models/IStatistic";
import User from "./user";

@Table({
    tableName: "statistics",
    timestamps: false,
    freezeTableName: true
})
class Statistic extends Model<IStatistic> implements IStatistic {

    @AutoIncrement
    @PrimaryKey
    @Column
    id: number

    @NotEmpty
    @Column
    test1: string


    @HasOne(() => User)
    user: User;
}

export default Statistic;