import UserController from "../controllers/userController";
import express from 'express';

const router = express.Router();
const userController = new UserController();


router.post('/', (req, res) => userController.addUser(req, res));
router.get('/', (req, res) => userController.getUsers(req, res));
router.get('/:id', (req, res) => userController.getUser(req, res));
router.delete('/:id', (req, res) => userController.deleteUser(req, res));

export default router;