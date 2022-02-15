import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    items: []
}

export const basketSlice = create({
    name: "basket",
    initialState,
    reducer: {
        addToBasket: (state, action) => { },
        removeFromBasket: (state, action) => {}
    }
})

export const { addToBasket, removeFromBasket } = basketSlice.action
// selectors this is how to pull information from the global scopre
export const selectItems = (state) => state.basket.items
export default basketSlice.reducer 