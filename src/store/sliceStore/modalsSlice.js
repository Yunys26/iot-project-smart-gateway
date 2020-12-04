import { createSlice } from "@reduxjs/toolkit";

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