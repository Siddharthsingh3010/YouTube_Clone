import { createSlice } from '@reduxjs/toolkit'


const chatSlice = createSlice({
    name: "chat",
    initialState: {
        message: [],
    },
    reducers: {
        setMessgae: (state, action) => {

            state.message.splice(40, 39)
            state.message.push(action.payload)
        }
    }
})

export const { setMessgae } = chatSlice.actions;
export default chatSlice.reducer;