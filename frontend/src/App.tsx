import { useGetBooksQuery } from './features/booksApi'

function App() {
  const { data, error, isLoading } = useGetBooksQuery()

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
