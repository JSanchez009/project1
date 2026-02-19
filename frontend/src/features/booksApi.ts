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
  endpoints: (builder) => ({
    getBooks: builder.query<Book[], void>({     // this should return an array
      query: () => 'books',
    }),
  }),
})

// The hook to fetch app data
export const { useGetBooksQuery } = booksApi
