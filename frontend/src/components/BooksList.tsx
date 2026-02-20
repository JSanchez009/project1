import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";
import { useGetBooksQuery, useDeleteBookMutation, useUpdateBookMutation, type Book } from "../features/booksApi";
import { useState } from "react";

const BooksList = () => {
    const { data, isLoading, error } = useGetBooksQuery()
    const [deleteBook] = useDeleteBookMutation()
    const [updateBook] = useUpdateBookMutation()

    // keeping track of which row is being edited
    // null means no row is in edit mode right now
    const [editingId, setEditingId] = useState<string | null>(null)

    // these are just temporary holders while editing
    // basically like a mini form inside the table row
    const [editedTitle, setEditedTitle] = useState('')
    const [editedAuthor, setEditedAuthor] = useState('')

    // switching to string so deleting the value doesn't auto-reset to 0
    // number inputs are surprisingly dramatic
    const [editedPrice, setEditedPrice] = useState<string>('')

    // Will only happen if the data request fails
    if (isLoading) return <Typography>Loading...</Typography>
    if (error) return <Typography>Error loading books</Typography>

    // This will let us edit the title, author and price
    const startEditing = (book: Book) => {
        setEditingId(book._id)
        setEditedTitle(book.title)
        setEditedAuthor(book.author)
        setEditedPrice(book.price.toString()) // converting here so input behaves
    }

    const handleSave = async () => {
        if (!editingId) return
        
        // converting back to number before sending to backend
        // feels like the right place to do the type shift
        await updateBook({
            _id: editingId,
            title: editedTitle,
            author: editedAuthor,
            price: Number(editedPrice)
        })

        // exiting edit mode after save
        setEditingId(null)
    }

    return (
    <TableContainer component={Paper} elevation={4} sx={{ mt: 4, borderRadius: 3, backgroundColor: "#ffffff" }}>
        <Typography variant="h5" sx={{ p:2 }}>
            Books
        </Typography>

        <Table>
            <TableHead>
                <TableRow>
                    <TableCell sx={{ fontWeight: "bold" }}>Title</TableCell>
                    <TableCell sx={{ fontWeight: "bold" }}>Author</TableCell>
                    <TableCell sx={{ fontWeight: "bold" }}>Price</TableCell>
                    <TableCell sx={{ fontWeight: "bold" }}>Actions</TableCell>
                </TableRow>
            </TableHead>

            <TableBody>
                {/* mapping through books - if data is undefined this just won't render anything */}
                {data?.map((book) => (
                    <TableRow key={book._id} sx={{ "&:hover": {backgroundColor: "action.hover"},}}>
                        {editingId === book._id ? (
                            <>
                                <TableCell>
                                    <TextField
                                        value={editedTitle}
                                        onChange={(e) => setEditedTitle(e.target.value)}
                                        size="small"
                                        fullWidth
                                    />
                                </TableCell>

                                <TableCell>
                                    <TextField
                                        value={editedAuthor}
                                        onChange={(e) => setEditedAuthor(e.target.value)}
                                        size="small"
                                        fullWidth
                                    />
                                </TableCell>

                                <TableCell>
                                    <TextField
                                        type="number"
                                        value={editedPrice}
                                        // again keeping string state to avoid sticky zero situation again
                                        onChange={(e) => setEditedPrice(e.target.value)}
                                        size="small"
                                        fullWidth
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

                                {/* formatting price so it looks more real-world */}
                                <TableCell>${book.price.toFixed(2)}</TableCell>

                                <TableCell>
                                    <Button
                                        variant="outlined"
                                        size="small"
                                        sx={{ mr: 1 }}
                                        onClick={() => startEditing(book)}
                                    >
                                        Edit
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
