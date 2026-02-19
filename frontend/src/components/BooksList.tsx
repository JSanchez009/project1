import { Button } from "@mui/material";
import { useGetBooksQuery, useDeleteBookMutation } from "../features/booksApi";

const BooksList = () => {
    const { data, isLoading, error } = useGetBooksQuery()
    const [deleteBook] = useDeleteBookMutation()

    // Will only happen if the data request fails
    if (isLoading) return <p>Loading...</p>
    if (error) return <p>Error loading books</p>

    return (
        <>
            <h2>Books</h2>
            {/** this will list all of the books for our page */}
            {data?.map((book) => (
                <div key={book._id}>
                    {book.title} - ${book.price}
                    {/**this button calls useDeleteBookMutation to delete books */}
                    <Button onClick={() => deleteBook(book._id)}>
                        Delete
                    </Button>
                </div>
            ))}
        </>
    )
}

export default BooksList;