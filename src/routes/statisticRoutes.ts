import express from 'express';
import StatisticController from '../controllers/statisticController';
import JWT from '../helpers/jwt';

const router = express.Router();
const statisticController = new StatisticController()

router.get('/', JWT.authenticateToken, (req, res) => statisticController.getGames(req, res));
router.get('/:id', JWT.authenticateToken, (req, res) => statisticController.getGameById(req, res));


export default router;