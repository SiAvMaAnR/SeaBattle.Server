"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const router = express.Router();
router.get('/', function (req, res) {
    res.send({ status: "OK" });
});
exports.default = router;
//# sourceMappingURL=users.routes.js.map