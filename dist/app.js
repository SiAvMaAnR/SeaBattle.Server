"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./routes/index"));
const cors_1 = __importDefault(require("cors"));
const sequelize_1 = __importDefault(require("./sequelize/sequelize"));
require("reflect-metadata");
require("dotenv/config");
const User_1 = __importDefault(require("./models/User"));
const app = (0, express_1.default)();
const port = parseInt(process.env.PORT) || 3000;
const corsOptions = {};
sequelize_1.default.authenticate()
    .then(() => {
    const user = User_1.default.build({
        id: 1,
        name: "User1",
        age: 10
    });
    console.log(user);
    console.log("DB connect!");
})
    .catch(err => console.error(err));
app.use((0, cors_1.default)(corsOptions));
app.use(express_1.default.static(`${__dirname}/assets`));
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
app.use('/api', index_1.default);
app.listen(port, () => {
    console.log(`Server is listening port ${port}`);
});
//# sourceMappingURL=app.js.map