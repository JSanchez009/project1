import { useState } from "react"
import { useCreateBookMutation } from "../features/booksApi"
import {
  TextField,
  Button,
  Paper,
  Typography,
  Stack,
} from "@mui/material"

const AddBookForm = () => {
  const [createBook] = useCreateBookMutation()

  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("") // should be author ID
  const [price, setPrice] = useState<number>(0)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    await createBook({ title, author, price })

    setTitle("")
    setAuthor("")
    setPrice(0)
  }

  return (
    <Paper sx={{ p: 3, mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Add New Book
      </Typography>

      <form onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <TextField
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <TextField
            label="Author ID"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            helperText="Enter existing Author _id"
          />

          <TextField
            label="Price"
            type="number"
            value={price}
            onChange={(e) =>
              setPrice(Number(e.target.value))
            }
          />

          <Button type="submit" variant="contained">
            Add Book
          </Button>
        </Stack>
      </form>
    </Paper>
  )
}

export default AddBookForm
