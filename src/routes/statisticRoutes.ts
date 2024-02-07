import express from 'express';
import StatisticController from '../controllers/statisticController';
import JWT from '../helpers/jwt';

const router = express.Router();
const statisticController = new StatisticController();

router.post('/games', JWT.verifyToken, (req, res, next) =>
  statisticController.addGame(req, res, next)
);
router.get('/games', JWT.verifyToken, (req, res, next) =>
  statisticController.getGames(req, res, next)
);
router.get('/game/:id', JWT.verifyToken, (req, res, next) =>
  statisticController.getGameById(req, res, next)
);
router.get('/common', JWT.verifyToken, (req, res, next) =>
  statisticController.getCommonStat(req, res, next)
);

export default router;
