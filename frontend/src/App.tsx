import { Box, Container, Typography } from "@mui/material"
import AddBookForm from "./components/AddBookForm"
import BooksList from "./components/BooksList"

function App() {
  

  // Moved most of this to separate components
  return (
    <>
      {/* Hero section of the page */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)",
          color: "white",
          py: 8,
          mb: 6,
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            📚 Community Bookstore
          </Typography>

          <Typography variant="h6" sx={{ opacity: 0.9 }}>
            For all your second hand textbook needs!
          </Typography>
        </Container>
      </Box>

      {/* Main part of our app */}
      <Container maxWidth="lg">
        <AddBookForm />   {/** this will let users add new books */}
        <BooksList />     {/** this is where our list comes from */}
      </Container>
    </>
  )
}

export default App
