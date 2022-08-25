"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const statisticController_1 = __importDefault(require("../controllers/statisticController"));
const jwt_1 = __importDefault(require("../helpers/jwt"));
const router = express_1.default.Router();
const statisticController = new statisticController_1.default();
router.get('/games', jwt_1.default.authenticateToken, (req, res) => statisticController.getGames(req, res));
router.get('/game/:id', jwt_1.default.authenticateToken, (req, res) => statisticController.getGameById(req, res));
router.get('/common', jwt_1.default.authenticateToken, (req, res) => statisticController.getCommonStat(req, res));
exports.default = router;
//# sourceMappingURL=statisticRoutes.js.map