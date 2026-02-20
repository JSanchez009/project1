import { Button } from "@mui/material";
import { useGetBooksQuery, useDeleteBookMutation, useUpdateBookMutation, type Book } from "../features/booksApi";
import { useState } from "react";

const BooksList = () => {
    const { data, isLoading, error } = useGetBooksQuery()
    const [deleteBook] = useDeleteBookMutation()
    const [updateBook] = useUpdateBookMutation()

    const [editingId, setEditingId] = useState<string | null>(null)
    const [editedTitle, setEditedTitle] = useState('')
    const [editedAuthor, setEditedAuthor] = useState('')
    const [editedPrice, setEditedPrice] = useState<number>(0)

    // Will only happen if the data request fails
    if (isLoading) return <p>Loading...</p>
    if (error) return <p>Error loading books</p>

    const startEditing = (book: Book) => {
        setEditingId(book._id)
        setEditedTitle(book.title)
        setEditedAuthor(book.author)
        setEditedPrice(book.price)
    }

    const handleSave = async () => {
        if (!editingId) return
        
    await updateBook({
        _id: editingId,
        title: editedTitle,
        author: editedAuthor,
        price: editedPrice
    })
    setEditingId(null)
    }


    return (
    <div>
      <h2>Books</h2>

      {data?.map((book) => (
        <div key={book._id} style={{ marginBottom: '10px' }}>
          {editingId === book._id ? (
            <>
              <input
                value={editedTitle}
                onChange={(e) => setEditedTitle(e.target.value)}
              />
              <input
                value={editedAuthor}
                onChange={(e) => setEditedAuthor(e.target.value)}
              />
              <input
                type="number"
                value={editedPrice}
                onChange={(e) => setEditedPrice(Number(e.target.value))}
              />

              <button onClick={handleSave}>Save</button>
            </>
          ) : (
            <>
              {book.title} - ${book.price}
              <Button onClick={() => startEditing(book)}>Edit</Button>
              <Button onClick={() => deleteBook(book._id)}>Delete</Button>
            </>
          )}
        </div>
      ))}
    </div>
  )
}

export default BooksList;