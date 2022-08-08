import express from 'express';
import StatisticController from '../controllers/statisticController';

const router = express.Router();
const statisticController = new StatisticController()

router.get('/', async (req, res) => await statisticController.getStatistics(req, res));
router.post('/', async (req, res) => await statisticController.getStatistics(req, res));


export default router;