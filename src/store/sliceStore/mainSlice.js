import {
    createSlice,
    createAsyncThunk
} from "@reduxjs/toolkit";
import axios from "axios";

// запрос на проверку Логина пароля 
export const responseDataFrom = createAsyncThunk('main/responseDataFrom',
    ([login, password]) => {

        const response = axios.post(
                'https://gavnishe.tk/v1/iot/securities/login', {
                    login: login,
                    password: password
                }
            )
            .then((res) => {
                console.log(res)
                return res
            })
            .catch((error) => ({
                data: {
                    token: 'error'
                }
            }));
        return response;
    },
)

export const responseDataMock = createAsyncThunk('main/responseDataMock',
    (token) => {
        console.log(token)

        const config = {
            method: 'get',
            url: 'https://gavnishe.tk/v1/iot/users/ws',
            headers: {
                'Authorization': token,
                'Content-Type': 'application/json'
            },
        };

        const response = axios(config)
            .then((res) => {
                console.log(res);
                return res.data
            })
            .catch((error) => {
                console.log(error);
            });
        return response
        // console.log(response)
        // const config = {
        //     headers: {
        //       "Authorization": token
        //     }
        // }
        // console.log(config)
        // const response = axios.get('https://gavnishe.tk/v1/iot/ws​/users', config)
        //     .then(res => console.log(res))
        //     .catch(err => console.log(err))
        // console.log(response)
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
        // Добавление ограничительного списка
        // con: []
    },

    reducers: {
        // Добавление ограничительного списка
        // concatsArrData: (state, action) => {
        //     state.con = state.con.unshift(action.payload)
        // }
    },

    extraReducers: {
        [responseDataFrom.fulfilled]: (state, action) => {
            if (action.payload.data.token === 'error') {
                state.dataFormSignIn = 'error';
            } else {
                state.dataFormSignIn = 'next';
                state.token = action.payload.data.token;
            }
        },
        [responseDataFrom.pending]: (state, ) => {
            state.dataFormSignIn = 'loading';
        },
        [responseDataFrom.rejected]: (state) => {
            state.dataFormSignIn = 'error';
        },
        [responseDataMock.fulfilled]: (state, action) => {
            state.mock = action.payload
        },
        // [responseDataMock.pending]: (state, ) => {
        //     console.log('eeee')
        // },
        // [responseDataMock.rejected]: (state) => {
        //     console.log('11111')
        // },
    },
});

export default mainSlice.reducer;

export const { concatsArrData } = mainSlice.actions;