import express from 'express';
import statisticController from '../controllers/statisticController';
const router = express.Router();

router.get('/', async (req, res) => await statisticController.getStatistics(req, res));
router.post('/', function (req, res) {
    res.send({
        response: req.body
    });
})

export default router;