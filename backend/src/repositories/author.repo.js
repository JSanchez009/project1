import { Author } from "../models/author.model.js";

export const AuthorRepository = {
    findAll: () => Author.find()
}