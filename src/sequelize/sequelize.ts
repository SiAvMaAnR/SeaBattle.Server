import { Sequelize } from "sequelize-typescript";
import { Dialect } from "sequelize/types";
import { Statistic, User } from "../models/index";
import { generateMigration } from "sequelize-typescript-model-migration";
import path from "path";
import "dotenv/config";

// const migration = async (sequelize: Sequelize) => {
//     await generateMigration(sequelize, {
//         outDir: path.join(__dirname, "../migrations"),
//         snapshotDir: path.join(__dirname, "../snapshots"),
//         migrationName: "migration",
//     });
// }


const sync = async (sequelize: Sequelize): Promise<void> => {
    await sequelize.sync({ force: false });
}


const sequelize = new Sequelize({
    database: process.env.DATABASE,
    dialect: process.env.DIALECT as Dialect,
    username: process.env.NAME,
    password: process.env.PASSWORD,
    host: process.env.HOST_DB,
    repositoryMode: true
})

sequelize.addModels([User]);

sync(sequelize).catch(err => {
    console.error(<Error>err.message)
});


// migration(sequelize).catch(err => {
//     console.error(<Error>err.message);
// })

export default sequelize;