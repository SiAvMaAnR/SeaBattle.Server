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
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./src/routes/index"));
const cors_1 = __importDefault(require("cors"));
const sequelize_1 = require("./src/sequelize/sequelize");
require("dotenv/config");
const app = (0, express_1.default)();
const port = parseInt(process.env.PORT) || 3000;
const corsOptions = {};
app.use((0, cors_1.default)(corsOptions));
app.use(express_1.default.static(`${__dirname}/assets`));
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
(0, sequelize_1.openConnection)().then(() => __awaiter(void 0, void 0, void 0, function* () {
    console.log("open connection!");
})).catch(err => console.error(err));
app.use('/api', index_1.default);
app.listen(port, () => {
    console.log(`Server is listening port ${port}`);
});
// closeConnection().then(async () => {
//   console.log("close connection!");
// }).catch(err => console.error(err));
//# sourceMappingURL=app.js.map