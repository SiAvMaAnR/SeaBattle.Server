"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
require("dotenv/config");
const User_1 = __importDefault(require("../models/User"));
const sequelize = new sequelize_typescript_1.Sequelize({
    database: process.env.DATABASE,
    dialect: process.env.DIALECT,
    username: process.env.NAME,
    password: process.env.PASSWORD,
    host: process.env.HOST_DB,
    // models: [__dirname + '/models']
});
sequelize.addModels([User_1.default]);
exports.default = sequelize;
//# sourceMappingURL=sequelize.js.map