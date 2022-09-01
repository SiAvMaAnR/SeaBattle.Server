import UserController from '../controllers/userController';
import express from 'express';
import JWT from '../helpers/jwt';

const router = express.Router();
const userController = new UserController();

router.post('/', JWT.verifyToken, (req, res) =>
  userController.addUser(req, res)
);
router.get('/', JWT.verifyToken, (req, res) =>
  userController.getUsers(req, res)
);
router.get('/:id', JWT.verifyToken, (req, res) =>
  userController.getUser(req, res)
);
router.delete('/:id', JWT.verifyToken, (req, res) =>
  userController.deleteUser(req, res)
);

export default router;
