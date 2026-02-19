import { GenreService } from "../services/genre.service.js";

export const GenreController = {
    getAll: async (req, res) => {
        try {
            const genres = await GenreService.getAll();
            res.status(200).json(genres);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}