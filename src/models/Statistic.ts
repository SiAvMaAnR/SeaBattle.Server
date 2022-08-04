import { Model, Table, Column, AutoIncrement, PrimaryKey, NotEmpty, HasMany, HasOne } from "sequelize-typescript";
import IStatistic from "../interfaces/models/IStatistic";
import User from "./User";

@Table({
    tableName: "statistics",
    timestamps: true,
    freezeTableName: true
})
class Statistic extends Model<Statistic> implements IStatistic {

    // @AutoIncrement
    // @PrimaryKey
    // @Column
    // public id: number

    // @NotEmpty
    // @Column
    // public test1: string


    // @HasOne(() => User)
    // public user: User;
}

export default Statistic;