import mongoose from "mongoose";

// Schema will create the mapping to our books collection
const bookSchema = new mongoose.Schema({
    title : {
        type: String,
        required : true
    },
    author: {
        type :String,  // had to make it a string, so i could POST in the client
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