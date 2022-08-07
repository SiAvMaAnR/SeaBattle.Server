"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const baseRepository_1 = __importDefault(require("./baseRepository"));
const models_1 = require("../models");
class StatisticRepository extends baseRepository_1.default {
    constructor(sequelize) {
        super(sequelize.getRepository(models_1.Statistic));
    }
}
exports.default = StatisticRepository;
//# sourceMappingURL=statisticRepository.js.map