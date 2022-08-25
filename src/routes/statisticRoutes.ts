import express from 'express';
import StatisticController from '../controllers/statisticController';
import JWT from '../helpers/jwt';

const router = express.Router();
const statisticController = new StatisticController()

router.get('/games', JWT.authenticateToken, (req, res) => statisticController.getGames(req, res));
router.get('/game/:id', JWT.authenticateToken, (req, res) => statisticController.getGameById(req, res));
router.get('/common', JWT.authenticateToken, (req, res) => statisticController.getCommonStat(req, res));


export default router;