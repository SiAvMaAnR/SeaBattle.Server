import UserController from "../controllers/userController";
import express from 'express';
import TempController from "../controllers/tempController";

const router = express.Router();
const tempController = new TempController();

router.get('/', async (req, res) => await tempController.test1(req, res));


export default router;