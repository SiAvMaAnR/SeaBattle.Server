import express from 'express';
import AccountController from '../controllers/accountController';
import JWT from '../helpers/jwt';

const router = express.Router();
const accountController = new AccountController();

router.post('/login', (req, res, next) => accountController.login(req, res, next));
router.post('/register', (req, res, next) => accountController.register(req, res, next));
router.get('/info', JWT.verifyToken, (req, res, next) =>
  accountController.info(req, res, next)
);

export default router;
