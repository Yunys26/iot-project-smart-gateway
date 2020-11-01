import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// запрос на проверку Логина пароля 
const responseDataFrom = createAsyncThunk('main/responseDataFrom',
    (inputLogin, inputPassword) => {
        const response = axios.post('1121')
            .then( res => console.log(res))
            .catch( error => console.log(error));
        return response;
    }
)

export const mainSlice = createSlice({
    name: 'main',

    initialState: {
        // Данные входа если вдру понадобяться 
        data: [],
        // {Хранилище где будет храниться приложенная карта}
        mock: [],
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