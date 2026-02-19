import { GenreRepository } from "../repositories/genre.repo.js";

export const GenreService = {
    getAll: async () => {
        const genres = await GenreRepository.findAll();
        return genres;
    }
}