"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userController_1 = __importDefault(require("../controllers/userController"));
const express_1 = __importDefault(require("express"));
const jwt_1 = __importDefault(require("../helpers/jwt"));
const router = express_1.default.Router();
const userController = new userController_1.default();
router.post('/', jwt_1.default.authenticateToken, (req, res) => userController.addUser(req, res));
router.get('/', jwt_1.default.authenticateToken, (req, res) => userController.getUsers(req, res));
router.get('/:id', jwt_1.default.authenticateToken, (req, res) => userController.getUser(req, res));
router.delete('/:id', jwt_1.default.authenticateToken, (req, res) => userController.deleteUser(req, res));
exports.default = router;
//# sourceMappingURL=userRoutes.js.map