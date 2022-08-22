import express from 'express';
import StatisticController from '../controllers/statisticController';
import JWT from '../helpers/jwt';

const router = express.Router();
const statisticController = new StatisticController()

router.get('/', JWT.authenticateToken, (req, res) => statisticController.getStatistics(req, res));
router.post('/', JWT.authenticateToken, (req, res) => statisticController.getStatistics(req, res));


export default router;