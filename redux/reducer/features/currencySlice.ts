import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: []
}
export const currencySlice = createSlice({
    name:'currency',
    initialState,
    reducers: {
        updateList: (state,action) => {
            state.list =  action.payload
        }
    }

})

export const {updateList} = currencySlice.actions
export default currencySlice.reducer