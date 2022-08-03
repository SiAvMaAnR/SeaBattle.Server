import { Sequelize, } from "sequelize-typescript";
import { Dialect } from "sequelize/types";

const sequelize = new Sequelize(
    process.env.DATABASE,
    process.env.USER,
    process.env.PASSWORD,
    {
        host: process.env.HOST_SQL,
        dialect: process.env.DIALECT as Dialect ,
    }
)

export default sequelize;