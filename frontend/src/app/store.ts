import { configureStore } from '@reduxjs/toolkit'
import { booksApi } from '../features/booksApi'

// configureStore is what lets us create a store
export const store = configureStore({
  reducer: {
    [booksApi.reducerPath]: booksApi.reducer,   // booksApi is the RTK Query 
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(booksApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>