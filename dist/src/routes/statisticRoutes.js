"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const statisticController_1 = __importDefault(require("../controllers/statisticController"));
const router = express_1.default.Router();
const statisticController = new statisticController_1.default();
router.get('/', (req, res) => statisticController.getStatistics(req, res));
router.post('/', (req, res) => statisticController.getStatistics(req, res));
exports.default = router;
//# sourceMappingURL=statisticRoutes.js.map