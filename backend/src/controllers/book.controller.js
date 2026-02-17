import { BookService } from "../services/book.services.js";

export const BookController = {
    getAll: async (req, res) => {
        try {
            const books = await BookService.getAll();
            res.status(200).json(books);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    getByAuthor: async (req, res) => {
        try {
            const books = await BookService.getByAuthor(req.params.authorId);
            res.status(200).json(books);
        } catch (error) {
            res.status(400).json({ message: error.message })
        }
    },
    getByGenre: async (req, res) => {
        try {
            const books = await BookService.getByGenre(req.params.genreId);
            res.status(200).json(books);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },
    createNewBook: async (req, res) => {
        try {
            const book = await BookService.create(req.body);
            res.status(201).json(book);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },
    updateBook: async (req, res) => {
        try {
            const book = await BookService.update(req.params.id, req.body);
            res.status(200).json(book);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },
    deleteBook: async (req, res) => {
        try {
            const book = await BookService.delete(req.params.id);
            res.status(200).json(book);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
};