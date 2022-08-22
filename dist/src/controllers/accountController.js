"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const baseController_1 = __importDefault(require("./baseController"));
const jwt_1 = __importDefault(require("../helpers/jwt"));
const accountService_1 = __importDefault(require("../services/accountService"));
class AccountController extends baseController_1.default {
    constructor() {
        super();
        this.accountService = new accountService_1.default();
    }
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const login = req.body["login"];
                const password = req.body["password"];
                const user = yield this.accountService.getUserByLogin(login);
                if (!user) {
                    throw {
                        status: 404,
                        message: "User not found!"
                    };
                }
                if ((user === null || user === void 0 ? void 0 : user.password) != password) {
                    throw {
                        status: 400,
                        message: "Invalid password!"
                    };
                }
                return res.status(200).json({
                    type: "Bearer",
                    token: jwt_1.default.generateAccessToken({
                        id: user.id,
                        login: login
                    }),
                });
            }
            catch (err) {
                return res.status(err.status || 400).json({
                    message: err.message
                });
            }
        });
    }
    register(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const login = req.body["login"];
                const password = req.body["password"];
                const user = yield this.accountService.getUserByLogin(login);
                if (user) {
                    throw {
                        status: 409,
                        message: "User already exists!"
                    };
                }
                if (!(/^[a-zA-Z0-9]{4,}$/).test(login)) {
                    throw {
                        status: 400,
                        message: "Incorrect login!"
                    };
                }
                if (!(/^[a-zA-Z0-9]{6,20}$/).test(password)) {
                    throw {
                        status: 400,
                        message: "Incorrect password!"
                    };
                }
                const newUser = yield this.accountService.createUser({
                    login: login,
                    password: password
                });
                return res.status(200).json({
                    data: newUser,
                    message: "Success!"
                });
            }
            catch (err) {
                return res.status(err.status || 400).json({
                    message: err.message
                });
            }
        });
    }
    info(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return res.status(200).json({
                    data: req['user'],
                    message: "Success!"
                });
            }
            catch (err) {
                return res.status(err.status || 400).json({
                    message: err.message
                });
            }
        });
    }
}
exports.default = AccountController;
//# sourceMappingURL=accountController.js.map