import express from 'express';
import AccountController from '../controllers/accountController';
import JWT from '../helpers/jwt';
import { body } from 'express-validator';

const router = express.Router();
const accountController = new AccountController();

router.post(
  '/login',
  // body('login').isLength({ min: 6, max: 20 }).withMessage('Incorrect login!'),
  // body('password')
  //   .isLength({ min: 6, max: 20 })
  //   .withMessage('Incorrect password!'),
  (req, res, next) => accountController.login(req, res, next)
);

router.post(
  '/register',
  body('login').isLength({ min: 6, max: 20 }).withMessage('Incorrect login!'),
  body('password')
    .isLength({ min: 6, max: 20 })
    .withMessage('Incorrect password!'),
  (req, res, next) => accountController.register(req, res, next)
);

router.get('/info', JWT.verifyToken, (req, res, next) =>
  accountController.info(req, res, next)
);

export default router;
