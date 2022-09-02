import express from 'express';
import AccountController from '../controllers/accountController';
import JWT from '../helpers/jwt';

const router = express.Router();
const accountController = new AccountController();

router.post('/login', (req, res) => accountController.login(req, res));
router.post('/register', (req, res) => accountController.register(req, res));
router.get('/info', JWT.verifyToken, (req, res) =>
  accountController.info(req, res)
);

export default router;
