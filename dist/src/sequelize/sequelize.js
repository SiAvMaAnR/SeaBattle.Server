"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.closeConnection = exports.openConnection = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const index_1 = require("../models/index");
require("dotenv/config");
// const migration = async (sequelize: Sequelize) => {
//     await generateMigration(sequelize, {
//         outDir: path.join(__dirname, "../migrations"),
//         snapshotDir: path.join(__dirname, "../snapshots"),
//         migrationName: "migration",
//     });
// }
const sync = (sequelize) => __awaiter(void 0, void 0, void 0, function* () {
    yield sequelize.sync({ force: false });
});
const sequelize = new sequelize_typescript_1.Sequelize({
    database: process.env.DATABASE,
    dialect: process.env.DIALECT,
    username: process.env.NAME,
    password: process.env.PASSWORD,
    host: process.env.HOST_DB,
    repositoryMode: process.env.REPOSITORY_MODE == "true"
});
sequelize.addModels([index_1.User, index_1.Statistic]);
sync(sequelize).catch(err => {
    console.error(err.message);
});
const openConnection = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield sequelize.authenticate();
});
exports.openConnection = openConnection;
const closeConnection = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield sequelize.close();
});
exports.closeConnection = closeConnection;
// migration(sequelize).catch(err => {
//     console.error(<Error>err.message);
// })
exports.default = sequelize;
//# sourceMappingURL=sequelize.js.map