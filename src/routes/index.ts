import express from 'express';
import usersRoutes from "./userRoutes";
import statisticRoutes from "./statisticRoutes";
import tempRoutes from './tempRoutes';

const router = express.Router();

router.use('/users', usersRoutes);
router.use('/statistic', statisticRoutes);
router.use('/temp', tempRoutes)

export default router;