import express from 'express';
import AccountController from '../controllers/accountController';
import JWT from '../helpers/jwt';

const router = express.Router();
const accountController = new AccountController();

router.post('/login', accountController.login);
router.post('/register', accountController.register);
router.get('/info', JWT.verifyToken, accountController.info);

export default router;
