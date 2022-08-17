import express from 'express';
import usersRoutes from "./userRoutes";
import statisticRoutes from "./statisticRoutes";

const router = express.Router();

router.use('/user', usersRoutes);
router.use('/statistic', statisticRoutes);

export default router;