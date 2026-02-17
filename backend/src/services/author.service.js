import { AuthorRepository } from "../repositories/author.repo.js";

export const AuthorService = {
    getAll: async () => {
        const authors = await AuthorRepository.findAll();
        return authors;
    }
}