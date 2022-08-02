"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sequelize_1 = __importDefault(require("../sequelize/sequelize"));
const router = express_1.default.Router();
router.get('/', function (req, res) {
    sequelize_1.default.authenticate()
        .then(() => console.log('Connected.'))
        .catch((err) => console.error('Connection error: ', err));
    res.send({
        status: "OK",
        type: "data"
    });
});
router.post('/', function (req, res) {
    res.send({
        response: req.body
    });
});
exports.default = router;
//# sourceMappingURL=data.routes.js.map