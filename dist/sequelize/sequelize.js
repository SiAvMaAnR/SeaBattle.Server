"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const sequelize = new sequelize_typescript_1.Sequelize(process.env.DATABASE, process.env.USER, process.env.PASSWORD, {
    host: process.env.HOST_SQL,
    dialect: process.env.DIALECT,
});
exports.default = sequelize;
//# sourceMappingURL=sequelize.js.map