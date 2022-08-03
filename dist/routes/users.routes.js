"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const users_constroller_1 = __importDefault(require("../controllers/users.constroller"));
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get('/', (req, res) => users_constroller_1.default.getUsers(req, res));
router.get('/:id', (req, res) => users_constroller_1.default.getUser(req, res));
router.post('/', (req, res) => users_constroller_1.default.addUser(req, res));
router.put('/', (req, res) => users_constroller_1.default.updateUser(req, res));
router.delete('/:id', (req, res) => users_constroller_1.default.deleteUser(req, res));
exports.default = router;
//# sourceMappingURL=users.routes.js.map