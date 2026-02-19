import express from 'express';
import { AuthorController } from '../controllers/author.controller.js';

const router = express.Router();

// this will bring back all books by that author
router.get('/', AuthorController.getAll);

export default router;