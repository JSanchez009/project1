import AddBookForm from "./components/AddBookForm"
import BooksList from "./components/BooksList"


function App() {
  

  // Moved most of this to separate components
  return (
    <div>
      <h1>Bookstore</h1>
      <AddBookForm />   {/** this will let users add new books */}
      <BooksList />     {/** this is where our list comes from */}
    </div>
  )
}

export default App
