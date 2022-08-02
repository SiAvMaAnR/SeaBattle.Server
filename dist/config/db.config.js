"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const configDB = {
    host: "localhost",
    user: "postgres",
    password: "Sosnova61S",
    db: "postgres",
    dialect: "postgres",
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};
exports.default = configDB;
//# sourceMappingURL=db.config.js.map