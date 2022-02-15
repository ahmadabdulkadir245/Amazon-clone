import { configureStore } from '@redux/toolkit'
import basketReducer from '../slices/basketSlice'

export const store = configureStore({
    reducer: {
        basket: basketReducer
    }
})