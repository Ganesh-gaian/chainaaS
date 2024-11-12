import { createSlice } from '@reduxjs/toolkit';



const initialState = {
    count: 0
};

export const countSlice = createSlice({
    name: 'chains',
    initialState,
    reducers: {
        addCount: (state, action) => {
            state.count = state.count + 1;
        },
        decreaseCount: (state, action) => {
            state.count = state.count - 1;
        }
    },
});

export const { addCount, decreaseCount } = countSlice.actions;


export default countSlice.reducer;
