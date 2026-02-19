import { useState } from "react";
import { useCreateBookMutation } from "../features/booksApi";
import { Button } from "@mui/material";

const AddBookForm = () => {
    const [createBook] = useCreateBookMutation()

    // The states for title, author, and price
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [price, setPrice] = useState(0)

    // preventDefault should prevent our page from refreshing
    const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()

        await createBook({
            title,
            author,
            price
        })

        setTitle('')
        setAuthor('')
        setPrice(0)
    }

    // The inputs for the page
    return (
        <form onSubmit={handleSubmit}>
            <h2>Add Book</h2>

            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
            />

            <input
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="Author"
            />

            <input
                value={price}
                type="number"
                onChange={(e) => setPrice(Number(e.target.value))}
                placeholder="Price"
            />

            <Button type="submit">Add</Button>
        </form>
    )
}

export default AddBookForm