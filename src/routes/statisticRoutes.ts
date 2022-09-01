import express from 'express';
import StatisticController from '../controllers/statisticController';
import JWT from '../helpers/jwt';

const router = express.Router();
const statisticController = new StatisticController();

router.post('/games', JWT.verifyToken, (req, res) =>
  statisticController.addGame(req, res)
);
router.get('/games', JWT.verifyToken, (req, res) =>
  statisticController.getGames(req, res)
);
router.get('/game/:id', JWT.verifyToken, (req, res) =>
  statisticController.getGameById(req, res)
);
router.get('/common', JWT.verifyToken, (req, res) =>
  statisticController.getCommonStat(req, res)
);

export default router;
