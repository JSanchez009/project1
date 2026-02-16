import { Book } from "../models/book.model";

// This will talk directly to our MongoDB
export const BookRepository = {
    findAll: () => Book.find(),
    findByAuthor: (authorId) => Book.find({ author: authorId }).populate("author"),
    findByGenre: (genreId) => Book.find({ genre: genreId}).populate("genre"),
    create: (data) => Book.create(data),        // Lets us create new Books
    updateById: (id, data) => Book.findByIdAndUpdate(id, data, { new: true }), //update
    deleteByid: (id) => Book.findByIdAndDelete(id)      // this will delete books
}