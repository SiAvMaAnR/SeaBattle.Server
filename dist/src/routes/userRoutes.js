"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userController_1 = __importDefault(require("../controllers/userController"));
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get('/', (req, res) => userController_1.default.getUsers(req, res));
router.get('/:id', (req, res) => userController_1.default.getUser(req, res));
router.post('/', (req, res) => userController_1.default.addUser(req, res));
router.put('/', (req, res) => userController_1.default.updateUser(req, res));
router.delete('/:id', (req, res) => userController_1.default.deleteUser(req, res));
exports.default = router;
//# sourceMappingURL=userRoutes.js.map