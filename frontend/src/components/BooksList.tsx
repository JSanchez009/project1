import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";
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
    if (isLoading) return <Typography>Loading...</Typography>
    if (error) return <Typography>Error loading books</Typography>

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
    <TableContainer component={Paper} sx={{ mt: 4 }}>
        <Typography variant="h5" sx={{ p:2 }}>
            Books
        </Typography>

        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Title</TableCell>
                    <TableCell>Author</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Actions</TableCell>
                </TableRow>
            </TableHead>

            <TableBody>
                {data?.map((book) => (
                    <TableRow key={book._id}>
                        {editingId === book._id ? (
                            <>
                                <TableCell>
                                    <TextField
                                        value={editedTitle}
                                        onChange={(e) => setEditedTitle(e.target.value)}
                                        size="small"
                                    />
                                </TableCell>
                                <TableCell>
                                    <TextField
                                        value={editedAuthor}
                                        onChange={(e) => setEditedAuthor(e.target.value)}
                                        size="small"
                                    />
                                </TableCell>
                                <TableCell>
                                    <TextField
                                    type="number"
                                        value={editedPrice}
                                        onChange={(e) => setEditedPrice(Number(e.target.value))}
                                        size="small"
                                    />
                                </TableCell>
                                <TableCell>
                                    <Button
                                        variant="contained"
                                        color="success"
                                        onClick={handleSave}
                                        sx={{ mr: 1 }}
                                    >
                                        Save
                                    </Button>
                                </TableCell>
                            </>
                        ) : (
                            <>
                                <TableCell>{book.title}</TableCell>
                                <TableCell>{book.author}</TableCell>
                                <TableCell>{book.price}</TableCell>
                                <TableCell>
                                    <Button
                                        variant="outlined"
                                        onClick={() => startEditing(book)}
                                        sx={{ mr: 1 }}
                                    >Edit
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="error"
                                        onClick={() => deleteBook(book._id)}
                                    >
                                        Delete
                                    </Button>
                                </TableCell>
                            </>
                        )}
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
  )
}

export default BooksList;