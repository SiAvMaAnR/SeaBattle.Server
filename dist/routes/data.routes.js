var express = require('express');
var router = express.Router();
router.get('/', function (req, res) {
    res.send({ status: "OK", type: "data" });
});
module.exports = router;
//# sourceMappingURL=data.routes.js.map