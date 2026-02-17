import express from "express";
import { BookController } from "../controllers/book.controller";

const router = express.Router();

router.get('/', BookController.getAll);
router.get('/author/:authorId', BookController.getByAuthor);
router.get('/genre/:genreId', BookController.getByGenre);
router.post('/', BookController.createNewBook);
router.put('/:id', BookController.updateBook);
router.delete('/:id', BookController.deleteBook);

export default router;