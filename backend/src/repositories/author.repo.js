import { Author } from "../models/author.model";

export const AuthorRepository = {
    findAll: () => Author.find()
}