import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    topping: ['pepperoni'],
    gluten: true
}

export const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {
        toggleGluten: (state) => {
            state.gluten = !state.gluten
        },
        addTopping: (state, action) => {
            state.topping = [...state.topping, action.payload]
        }
    }
})

export const { toggleGluten, addTopping } = pizzaSlice.actions

export default pizzaSlice.reducer