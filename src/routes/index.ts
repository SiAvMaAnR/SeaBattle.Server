import express from 'express';
import usersRoutes from "./userRoutes";
import statisticRoutes from "./statisticRoutes";
import { Statistic } from '../models';

const router = express.Router();

router.use('/users', usersRoutes);
router.use('/statistic', statisticRoutes);

export default router;