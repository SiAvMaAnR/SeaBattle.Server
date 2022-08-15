import express from 'express';
import StatisticController from '../controllers/statisticController';

const router = express.Router();
const statisticController = new StatisticController()

router.get('/', (req, res) => statisticController.getStatistics(req, res));
router.post('/', (req, res) => statisticController.getStatistics(req, res));


export default router;