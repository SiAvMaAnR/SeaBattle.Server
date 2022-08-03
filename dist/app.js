"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./routes/index"));
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
const app = (0, express_1.default)();
const port = parseInt(process.env.PORT) || 3000;
const host = process.env.HOST || "127.0.0.1";
const corsOptions = {};
app.use((0, cors_1.default)(corsOptions));
app.use(express_1.default.static(`${__dirname}/assets`));
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
app.use('/api', index_1.default);
app.listen(port, host, () => {
    console.log(`Server is listening on ${port}`);
});
//# sourceMappingURL=app.js.map