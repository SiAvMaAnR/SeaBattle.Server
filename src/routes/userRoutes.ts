import UserController from "../controllers/userController";
import express from 'express';

const router = express.Router();
const userController = new UserController();


router.get('/', async (req, res) => await userController.getUsers(req, res));
router.get('/:id', async (req, res) => await userController.getUser(req, res));
router.post('/', async (req, res) => await userController.addUser(req, res));
router.put('/', async (req, res) => await userController.updateUser(req, res));
router.delete('/:id', async (req, res) => await userController.deleteUser(req, res));

export default router;