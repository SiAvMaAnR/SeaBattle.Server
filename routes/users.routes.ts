import UserController from "../controllers/users.constroller";
import express from 'express';

const router = express.Router();

router.get('/', UserController.getUsers);
router.post('/', UserController.setUsers);

export default router;