import mongoose from "mongoose";
import { BookRepository } from "../repositories/book.repo";

export const BookService = {

    getAll: async () => {

        // uses repo's findAll, to return all our books.
        const books = await BookRepository.findAll();

        return books
    },

    getByAuthor: async (authorId) => {
        if(!mongoose.Types.ObjectId.isValid(authorId)) {
            throw new Error("Invalid author ID");
        }

        return await BookRepository.findByAuthor(authorId);
    },

    getByGenre: async (genreId) => {
        if (!mongoose.Types.ObjectId.isValid(genreId)) {
            throw new Error("Invalid genre ID");
        }

        return await BookRepository.findByGenre(genreId);
    },

    create: async (data) => {

        if(!data.title) {
            throw new Error("Title is required");
        }

        return await BookRepository.create(data);
    },

    update: async (id, data) => {

        if (!mongoose.Types.ObjectId.isValid(id)) {
            throw new Error("Invalid update ID");
        }

        const updated = await BookRepository.updateById(id);

        if (!updated) {
            throw new Error("No Book to update");
        }

        return updated;
    },

    delete: async (id) => {
        if(!mongoose.Types.ObjectId.isValid(id)) {
            throw new Error("Invalid delete ID");
        }

        const deleted = await BookRepository.deleteByid(id);

        if (!deleted) {
            throw new Error("No Book to Delete");
        }

        return deleted;
    }

};