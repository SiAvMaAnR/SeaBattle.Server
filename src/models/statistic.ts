import { Model, Table, Column, AutoIncrement, PrimaryKey, NotEmpty, HasMany, HasOne } from "sequelize-typescript";
import IStatistic from "../interfaces/models/IStatistic";
import BaseModel from "./base";
import User from "./user";

@Table({
    tableName: "statistics",
    timestamps: false,
    freezeTableName: true
})
class Statistic extends BaseModel implements IStatistic {

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