import React from 'react';
import { Box, ThemeProvider, useMediaQuery } from '@material-ui/core';
import { Route, Switch } from 'react-router-dom';
import { createMuiTheme } from "@material-ui/core";
// Context
import { MainContext } from './context';
// Components
import SignIn from './components/SignIn/SignIn';
import Menu from './components/Menu/Menu';
import { themeAppLight, themeAppDark } from './appTheme';

export default function App(props) {
  // Смена состояния темы 
  const [darkMode, setDarkMode] = React.useState(false);

  return (
    <MainContext.Provider value={{ setDarkMode, darkMode }}>
      <ThemeProvider theme={darkMode && themeAppDark || themeAppLight}>
        <Box>
          <div className="App">
            <Switch>
              <Route exact path="/" component={SignIn}/>
              <Route path="/menu" component={Menu} />
            </Switch>
          </div>
        </Box>
      </ThemeProvider>
    </MainContext.Provider>
  );
}