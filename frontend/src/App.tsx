import { useGetBooksQuery } from './features/booksApi'

function App() {
  // The state will be one o these three
  const { data, error, isLoading } = useGetBooksQuery()

  // If data doesn't work, one of these two will show on the screen
  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Error loading books</p>

  return (
    <div>
      <h1>Bookstore</h1>
      {data?.map((book) => (
        <div key={book._id}>
          {book.title} - ${book.price}
        </div>
      ))}
    </div>
  )
}

export default App
