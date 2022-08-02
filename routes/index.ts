import express from 'express';
import usersRoutes from "./users.routes";
import dataRoutes from "./data.routes";

const router = express.Router();

router.use('/users', usersRoutes);
router.use('/data', dataRoutes);

export default router;