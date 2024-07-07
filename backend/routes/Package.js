import express from 'express';
const router = express.Router();
import { getPackages, getPackage, createPackage } from '../controllers/package.controller.js';

router.get('/all', getPackages);
router.get('/:id', getPackage);
router.post("/create", createPackage);
export default router;