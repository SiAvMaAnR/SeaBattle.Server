import UserController from "../controllers/users.constroller";
import express from 'express';

const router = express.Router();

router.get('/', (req, res) => UserController.getUsers(req, res));
router.post('/', (req, res) => UserController.setUsers(req, res));

export default router;