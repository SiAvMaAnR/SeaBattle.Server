import express from 'express';
import sequelize from '../sequelize/sequelize';

const router = express.Router();

router.get('/', function (req, res) {

    sequelize.authenticate()
    .then(() => console.log('Connected.'))
    .catch((err) => console.error('Connection error: ', err));

    res.send({
        status: "OK",
        type: "data"
    });
});

router.post('/', function (req, res) {
    res.send({
        response: req.body
    });
})

export default router;