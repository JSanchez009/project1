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

  // basic local state for the form stuff
  // keeping everything controlled so React doesn't yell at me anymore
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("") // should be author ID (but actually just a name now lol)
  
  // using string here because number inputs get weird when clearing
  // learned this the hard way
  const [price, setPrice] = useState<string>("")

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()

    // quick guard so we don't accidentally send empty junk to the backend
    if (!title || !author || !price) return

    // converting price to number here instead of in state
    // seems cleaner and avoids the sticky 0 issue
    await createBook({ 
      title, 
      author, 
      price: Number(price) 
    })

    // resetting fields so it feels satisfying after submit
    setTitle("")
    setAuthor("")
    setPrice("")
  }

  return (
    <Paper elevation={4} sx={{p:4, mt: 4, borderRadius: 3}}>
      <Typography variant="h5" gutterBottom>
        Add New Book
      </Typography>

      <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <TextField
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
          />

          <TextField
            label="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            helperText="Enter the Author's name"
            fullWidth
          />

          <TextField
            label="Price"
            type="number"
            value={price}
            // keeping this as string so user can actually delete everything
            onChange={(e) => setPrice(e.target.value)}
            fullWidth
          />

          <Button type="submit" variant="contained" size="large">
            Add Book
          </Button>
        </Stack>
      </form>
    </Paper>
  )
}

export default AddBookForm