import UserController from '../controllers/userController';
import express from 'express';
import JWT from '../helpers/jwt';

const router = express.Router();
const userController = new UserController();

router.post('/', JWT.verifyToken, (req, res, next) =>
  userController.addUser(req, res, next)
);
router.get('/', JWT.verifyToken, (req, res, next) =>
  userController.getUsers(req, res, next)
);
router.get('/:id', JWT.verifyToken, (req, res, next) =>
  userController.getUser(req, res, next)
);
router.delete('/:id', JWT.verifyToken, (req, res, next) =>
  userController.deleteUser(req, res, next)
);

export default router;
