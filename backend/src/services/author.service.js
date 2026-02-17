import { AuthorRepository } from "../repositories/author.repo";

export const AuthorService = {
    getAll: async () => {
        const authors = await AuthorRepository.findAll();
        return authors;
    }
}