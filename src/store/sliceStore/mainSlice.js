import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// запрос на проверку Логина пароля 
export const responseDataFrom = createAsyncThunk('main/responseDataFrom',
    (inputLogin, inputPassword) => {
        const response = axios.post('https://gavnishe.tk/v1/iot/Securities/login', {
            body: {
                login: inputLogin,
                password: inputPassword
            }
        })
            .then( res => console.log(res))
            .catch( error => console.log(error));
        return response;
    }
)

export const mainSlice = createSlice({
    // Наименование слоая хранилища
    name: 'main',

    initialState: {
        // Данные входа если вдру понадобяться 
        dataFormSignIn: null,
        // {Хранилище где будет храниться приложенная карта}
        mock: [],
        token: null,
    },

    reducers: {

    },

    extraReducers: {
        [responseDataFrom.fulfilled]: (state, action) => {
            state.dataFormSignIn = 'next';
            state.token = action.payload.data.token;
        },
        [responseDataFrom.pending]: (state,) => {
            state.dataFormSignIn = 'loading';
        },
        [responseDataFrom.rejected]: (state) => {
            state.dataFormSignIn = 'error';
        },
    },
});

export default mainSlice.reducer;

// export const { } = mainSlice.actions;