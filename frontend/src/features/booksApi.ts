import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

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
    getBooks: builder.query<Book[], void>({
      query: () => 'books',
    }),
  }),
})

export const { useGetBooksQuery } = booksApi
