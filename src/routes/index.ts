import express from 'express';
import usersRoutes from "./userRoutes";
import dataRoutes from "./dataRoutes";

const router = express.Router();

router.use('/users', usersRoutes);
router.use('/data', dataRoutes);

export default router;