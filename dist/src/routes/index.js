"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRoutes_1 = __importDefault(require("./userRoutes"));
const statisticRoutes_1 = __importDefault(require("./statisticRoutes"));
const accountRoutes_1 = __importDefault(require("./accountRoutes"));
const router = express_1.default.Router();
router.use('/user', userRoutes_1.default);
router.use('/statistic', statisticRoutes_1.default);
router.use('/account', accountRoutes_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map