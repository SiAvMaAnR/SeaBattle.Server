import { Sequelize } from "sequelize-typescript";
import { Dialect } from "sequelize/types";
import { Statistic, User } from "../models/index";
import "dotenv/config";

// const migration = async (sequelize: Sequelize) => {
//     await generateMigration(sequelize, {
//         outDir: path.join(__dirname, "../migrations"),
//         snapshotDir: path.join(__dirname, "../snapshots"),
//         migrationName: "migration",
//     });
// }



const sequelize = new Sequelize({
    database: process.env.DATABASE,
    dialect: process.env.DIALECT as Dialect,
    username: process.env.NAME,
    password: process.env.PASSWORD,
    host: process.env.HOST_DB,
    repositoryMode: process.env.REPOSITORY_MODE == "true"
})

sequelize.addModels([User, Statistic]);

export const sync = async (sequelize: Sequelize): Promise<Sequelize> => {
    return await sequelize.sync({ force: false });
}

export const openConnection = async (): Promise<void> => {
    return await sequelize.authenticate();
}

export const closeConnection = async (): Promise<void> => {
    return await sequelize.close();
}

export default sequelize;