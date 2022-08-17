"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const statistic_1 = __importDefault(require("./statistic"));
class GameData {
    constructor() {
        this._statistic = new statistic_1.default();
    }
    get statistic() {
        return this._statistic;
    }
}
exports.default = GameData;
//# sourceMappingURL=gameData.js.map