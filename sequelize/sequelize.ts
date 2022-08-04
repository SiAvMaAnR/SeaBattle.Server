import { Sequelize, } from "sequelize-typescript";
import { Dialect } from "sequelize/types";
import "dotenv/config";
import { User } from "../models/index";


const syncBase = async (sequelize: Sequelize): Promise<void> => {
    await sequelize.sync({ force: false });
}

const sequelize = new Sequelize({
    database: process.env.DATABASE,
    dialect: process.env.DIALECT as Dialect,
    username: process.env.NAME,
    password: process.env.PASSWORD,
    host: process.env.HOST_DB,
});

sequelize.addModels([User]);

syncBase(sequelize).catch(err => console.error((err as Error).message));


export default sequelize;