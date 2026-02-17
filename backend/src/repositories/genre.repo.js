import { Genre } from "../models/genre.model.js";

export const GenreRepository = {
    findAll: () => Genre.find()
}