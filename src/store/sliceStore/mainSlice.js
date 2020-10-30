import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const responseDataFrom = createAsyncThunk('main/responseDataFrom',
    async () => {
        const response = await axios.post('1121');
        return response.data;
    }
)

export const mainSlice = createSlice({
    name: 'main',

    initialState: {
        state: [],
    },

    reducers: {

    },

    extraReducers: {
        [responseDataFrom.fulfilled]: (state, action) => {

        },
        [responseDataFrom.rejected]: (state, action) => {

        },
        [responseDataFrom.pending]: (state, action) => {

        },
    },
});

export default mainSlice.reducer;

// export { } = mainSlice.actions;