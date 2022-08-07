import UserController from "../controllers/userController";
import express from 'express';

const router = express.Router();

router.get('/', async (req, res) => await UserController.getUsers(req, res));
router.get('/:id', async (req, res) => await UserController.getUser(req, res));
router.post('/', async (req, res) => await UserController.addUser(req, res));
router.put('/', async (req, res) => await UserController.updateUser(req, res));
router.delete('/:id', async (req, res) => await UserController.deleteUser(req, res));

export default router;