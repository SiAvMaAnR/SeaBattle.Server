"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require("dotenv/config");
class JWT {
    static generateToken({ id, login }) {
        return jsonwebtoken_1.default.sign({
            user: { id, login }
        }, process.env.TOKEN_SECRET_JWT, { expiresIn: process.env.LIFETIME_JWT });
    }
    static authenticateToken(req, res, next) {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        if (!token) {
            return res.sendStatus(401);
        }
        jsonwebtoken_1.default.verify(token, process.env.TOKEN_SECRET_JWT, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }
            req["user"] = user;
            next();
        });
    }
    static tokenData(token) {
        var _a, _b;
        if (!token) {
            return null;
        }
        const payloadB64 = token.split('.')[1];
        const payload = Buffer.from(payloadB64, 'base64');
        const data = JSON.parse(payload.toString('binary'));
        return {
            id: (_a = data === null || data === void 0 ? void 0 : data.user) === null || _a === void 0 ? void 0 : _a.id,
            login: (_b = data === null || data === void 0 ? void 0 : data.user) === null || _b === void 0 ? void 0 : _b.login
        };
    }
}
exports.default = JWT;
//# sourceMappingURL=jwt.js.map