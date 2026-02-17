import { Genre } from "../models/genre.model";

export const GenreRepository = {
    findAll: () => Genre.find()
}