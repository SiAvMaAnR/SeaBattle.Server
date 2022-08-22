"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const accountController_1 = __importDefault(require("../controllers/accountController"));
const jwt_1 = __importDefault(require("../helpers/jwt"));
const router = express_1.default.Router();
const accountController = new accountController_1.default();
router.post('/login', (req, res) => accountController.login(req, res));
router.post('/register', (req, res) => accountController.register(req, res));
router.get('/info', jwt_1.default.authenticateToken, (req, res) => accountController.info(req, res));
exports.default = router;
//# sourceMappingURL=accountRoutes.js.map