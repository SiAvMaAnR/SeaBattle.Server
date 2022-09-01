import { Sequelize } from "sequelize-typescript";
import { Dialect } from "sequelize/types";
import { Statistic, User } from "../models/index";
import config from 'config';

// const migration = async (sequelize: Sequelize) => {
//     await generateMigration(sequelize, {
//         outDir: path.join(__dirname, "../migrations"),
//         snapshotDir: path.join(__dirname, "../snapshots"),
//         migrationName: "migration",
//     });
// }

const sequelize = new Sequelize({
    database: config.get("db.type"),
    dialect: config.get("db.dialect"),
    username: config.get("db.name"),
    password: config.get("db.password"),
    host: config.get("db.host"),
    repositoryMode: config.get("sequelize.repositoryMode")
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