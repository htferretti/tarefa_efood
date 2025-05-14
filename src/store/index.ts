import { configureStore } from '@reduxjs/toolkit'
import api from '../services/api'

export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer, // <-- adiciona o reducer do RTK Query
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware) // <-- adiciona middleware do RTK Query
})

export type RootReducer = ReturnType<typeof store.getState>
export default store