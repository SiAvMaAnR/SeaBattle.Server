"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_config_1 = __importDefault(require("../config/db.config"));
const sequelize = new sequelize_1.Sequelize(db_config_1.default.db, db_config_1.default.user, db_config_1.default.password, {
    dialect: db_config_1.default.dialect,
    pool: {
        max: db_config_1.default.pool.max,
        min: db_config_1.default.pool.min,
        acquire: db_config_1.default.pool.acquire,
        idle: db_config_1.default.pool.idle, //время простоя в миллисекундах, по истечении которого соединение покинет пул (Default: 1000)
    },
});
exports.default = sequelize;
//# sourceMappingURL=sequelize.js.map