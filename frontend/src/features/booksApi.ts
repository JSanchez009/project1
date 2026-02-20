import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// What our Book info must look like
export interface Book {
  _id: string
  title: string
  author: string
  price: number
}

export const booksApi = createApi({
  reducerPath: 'booksApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/api/v1/' }),
  tagTypes: ['Books'],
  endpoints: (builder) => ({

    // This will get the book data
    // The .query is our GET
    getBooks: builder.query<Book[], void>({     // this should return an array
      query: () => 'books',
      providesTags: ['Books'],
    }),

    // This will let users create new Books
    // The .mutation is what lets us make changes to our DB
    createBook: builder.mutation<Book, Partial<Book>>({
        query: (newBook) => ({
            url: 'books',
            method: 'POST',
            body: newBook,
        }),
        // This updates the UI without refreshing the page
        invalidatesTags: ['Books'],
    }),

    // This will let us update books, using the books id
    updateBook: builder.mutation<Book, Book>({
        query: (book) => ({
            url: `books/${book._id}`,
            method: 'PUT',
            body: book,
        }),
        invalidatesTags: ['Books'],
    }),


    // This will let us remove books from our list
    deleteBook: builder.mutation<{ success: boolean; id: string }, string>({
        query: (id) => ({
            url: `books/${id}`,
            method: 'DELETE',
        }),
        invalidatesTags: ['Books'],
    }),
  }),
})

// These are the RTK hooks
export const { useGetBooksQuery,
            useCreateBookMutation,
            useUpdateBookMutation,
            useDeleteBookMutation
        } = booksApi
