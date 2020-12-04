import React from 'react';
import { useDispatch } from 'react-redux';
import { Box, ThemeProvider } from '@material-ui/core';
import { Route, Switch } from 'react-router-dom';
import { createMuiTheme } from "@material-ui/core";
import { green } from '@material-ui/core/colors';
// Context
import { MainContext } from './context';
// Components
import SignIn from './components/SignIn';
import Menu from './components/Menu';
import ModalSecurity from './components/Modals/ModalSecurity';
import ModalMail from './components/Modals/ModalMail';
import ModalSupport from './components/Modals/ModalSupport';
import ModalDocument from './components/Modals/ModalDocument';
import ModalRegUsers from './components/Modals/ModalRegUsers';
import ModalTur from './components/Modals/ModalTur';
import ModalInfoSystem from './components/Modals/ModalInfoSystem';
import ModalUserAdmin from './components/Modals/ModalUserAdmin';
import ModalQuit from './components/Modals/ModalQuit';


export default function App(props) {
    // Смена состояния темы
    const [darkMode, setDarkMode] = React.useState(false);

    const dispatch = useDispatch();

    const themeAppDark = createMuiTheme({
        palette: {
            type: 'dark',
            primary: green,
        },
    });

    const themeAppLight = createMuiTheme({
        palette: {
            type: 'light',
        },

    });

    return (
        <MainContext.Provider value={{ setDarkMode, darkMode }}>
            <ThemeProvider theme={(darkMode && themeAppDark) || themeAppLight}>
                <Box>
                    <div className="App">
                        <Switch>
                            <Route exact path="/" component={SignIn}/>
                            <Route path="/menu" component={Menu} />
                        </Switch>

                        <ModalSecurity dispatch={dispatch}/>
                        <ModalMail dispatch={dispatch}/>
                        <ModalSupport dispatch={dispatch}/>
                        <ModalDocument dispatch={dispatch}/>
                        <ModalRegUsers dispatch={dispatch}/>
                        <ModalTur dispatch={dispatch}/>
                        <ModalUserAdmin dispatch={dispatch}/>
                        <ModalInfoSystem dispatch={dispatch}/>
                        <ModalQuit dispatch={dispatch}/>
                    </div>
                </Box>
            </ThemeProvider>
        </MainContext.Provider>
    );
}