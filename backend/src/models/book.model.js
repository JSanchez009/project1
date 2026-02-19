import mongoose from "mongoose";

// Schema will create the mapping to our books collection
const bookSchema = new mongoose.Schema({
    title : {
        type: String,
        required : true
    },
    author: {
        type : mongoose.Schema.Types.ObjectId,
        ref: "Author"
    },
    genre: {
        type : mongoose.Schema.Types.ObjectId,
        ref: "Genre"
    },
    releaseDate: Date,
    price : Number,
    inStock : Boolean
});

export const Book = mongoose.model("Book", bookSchema);