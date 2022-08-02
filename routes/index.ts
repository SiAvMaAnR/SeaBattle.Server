var express = require('express');
var router = express.Router();

var usersRoutes = require("./users.routes");
var dataRoutes = require("./data.routes");

router.use('/users', usersRoutes);
router.use('/data', dataRoutes);


module.exports = router;