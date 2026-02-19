import { AuthorService } from "../services/author.service.js";

export const AuthorController = {
    getAll: async (req, res) => {
        try {
            const authors = await AuthorService.getAll();
            res.status(200).json(authors);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}