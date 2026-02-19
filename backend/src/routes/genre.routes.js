import express from 'express';
import { GenreController } from '../controllers/genre.controller.js';

const router = express.Router();

// This will bring up a list of all books in that genre
router.get('/', GenreController.getAll);

export default router;