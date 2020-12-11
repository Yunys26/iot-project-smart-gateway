import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const responseAddAdmin = createAsyncThunk('main/responseAddAdmin', 
    ([login, password, token]) => {
        const data = JSON.stringify({
            login: login,
            password: password
        })

        const config = {
            method: 'POST',
            url: 'https://gavnishe.tk/v1/iot/securities/create',
            headers: {
                'Authorization': token,
                'Content-Type': 'application/json'
            },
            data: data
        };

        const response = axios(config)
            .then(res => console.log(res))
            .catch(err => console.log(err))
        console.log(response)
    }
)

export const responseAddNewUser = createAsyncThunk('main/responseAddAdmin', 
    ([name, surname, position, menCheck, womenCheck, birthday, idCard ,token]) => {
        const data = JSON.stringify({
            name: name,
            surname: surname,
            position: position,
            gender: ((menCheck === true && "Мужской" ) || (womenCheck === true && "Женский")),
            birthday: birthday,
            card_id: idCard
        })

        const config = {
            method: 'POST',
            url: 'https://gavnishe.tk/v1/iot/users/upsert',
            headers: {
                'Authorization': token,
                'Content-Type': 'application/json'
            },
            data: data
        };

        const response = axios(config)
            .then(res => console.log(res))
            .catch(err => console.log(err))
        console.log(response)
    }
)

const modalsSlice = createSlice({
    name: 'modals',

    initialState: {
        modalsSecurityStore: false,
        modalsMailState: false,
        modalsSupportStore: false,

        modalsDocumentStore: false,
        modalsRegStore: false,
        modalsTurStore: false,

        modalsUserAdminStore: false,
        modalInfoSystemStore: false,
        modalsQuitStore: false,
    },
    
    reducers: {
        // Безопатсность
        changeModalSecurityState: (state, action) => {
            state.modalsSecurityStore = action.payload;
        },
        // Почта
        changeModalMailState: (state, action) => {
            state.modalsMailState = action.payload;
        },
        // Поддержка
        changeModalSupportState: (state, action) => {
            state.modalsSupportStore = action.payload;
        },
        // Документы
        changeModalDocumentState: (state, action) => {
            state.modalsDocumentStore = action.payload
        },
        // Регистрация
        changeModalRegState: (state, action) => {
            state.modalsRegStore = action.payload;
        },
        // Турникет
        changeModalTurState: (state, action) => {
            state.modalsTurStore = action.payload;
        },
        // Пользователи
        changeModalUserAdminState: (state, action) => {
            state.modalsUserAdminStore = action.payload;
        },
        // О системе
        changeModalInfoSystemState: (state, action) => {
            state.modalInfoSystemStore = action.payload;
        },
        changeModalQuitState: (state, action) => {
            state.modalsQuitStore = action.payload;
        },
    },

    extraReducers: {
        [responseAddAdmin.fulfilled]: (state) => {
            console.log('221')
        },
        [responseAddAdmin.pending]: (state, ) => {
            console.log('223')
        },
        [responseAddAdmin.rejected]: (state) => {
            console.log('2224')
        },
        [responseAddNewUser.fulfilled]: (state) => {
            console.log('221')
        },
        [responseAddNewUser.pending]: (state, ) => {
            console.log('223')
        },
        [responseAddNewUser.rejected]: (state) => {
            console.log('2224')
        },
    }

})

export default modalsSlice.reducer;

export const {
    changeModalSecurityState,
    changeModalMailState,
    changeModalSupportState,
    changeModalDocumentState,
    changeModalRegState,
    changeModalTurState,
    changeModalUserAdminState,
    changeModalInfoSystemState,
    changeModalQuitState,
} = modalsSlice.actions;