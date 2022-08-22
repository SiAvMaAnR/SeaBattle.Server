import express from 'express';
import usersRoutes from "./userRoutes";
import statisticRoutes from "./statisticRoutes";
import accountRoutes from './accountRoutes';

const router = express.Router();

router.use('/user', usersRoutes);
router.use('/statistic', statisticRoutes);
router.use('/account', accountRoutes);

export default router;