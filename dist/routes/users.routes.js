"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const users_constroller_1 = __importDefault(require("../controllers/users.constroller"));
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get('/', users_constroller_1.default.getUsers);
exports.default = router;
//# sourceMappingURL=users.routes.js.map