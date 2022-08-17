"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require("dotenv/config");
class JWT {
    generateAccessToken(username) {
        return jsonwebtoken_1.default.sign(username, process.env.TOKEN_SECRET_JWT, { expiresIn: process.env.LIFETIME_JWT });
    }
}
exports.default = new JWT();
//# sourceMappingURL=jwt.js.map