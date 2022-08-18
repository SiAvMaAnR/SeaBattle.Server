"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const field_1 = __importDefault(require("./field"));
class MyField extends field_1.default {
    constructor() {
        super();
    }
    setField(field) {
        super.field = field;
        return super.field;
    }
}
exports.default = MyField;
//# sourceMappingURL=myField.js.map