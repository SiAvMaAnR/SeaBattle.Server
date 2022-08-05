import UserController from "../controllers/userController";
import express from 'express';

const router = express.Router();

router.get('/', (req, res) => UserController.getUsers(req, res));
router.get('/:id', (req, res) => UserController.getUser(req, res));
router.post('/', (req, res) => UserController.addUser(req, res));
router.put('/', (req, res) => UserController.updateUser(req, res));
router.delete('/:id', (req, res) => UserController.deleteUser(req, res));

export default router;