import express from 'express';

const router = express.Router();

router.get('/', function (req, res) {
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