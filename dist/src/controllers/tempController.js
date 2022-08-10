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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = __importDefault(require("../sequelize/sequelize"));
const baseController_1 = __importDefault(require("./baseController"));
const gameStatRepository_1 = __importDefault(require("../repositories/gameStatRepository"));
const gameService_1 = __importDefault(require("../services/gameService"));
class TempController extends baseController_1.default {
    constructor() {
        super();
        this.statisticRepository = new gameStatRepository_1.default(sequelize_1.default);
        this.test1 = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const service = new gameService_1.default();
            const battleground = service.getMyFieldArr();
            return res.status(200).send({
                battleground: battleground,
            });
        });
    }
}
exports.default = TempController;
//# sourceMappingURL=tempController.js.map