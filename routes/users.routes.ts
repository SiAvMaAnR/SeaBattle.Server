const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    res.send({
        status: "OK",
        type: "users"
    });
});

export default router;