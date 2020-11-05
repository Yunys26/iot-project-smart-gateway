import React from 'react';
import { Box, ThemeProvider } from '@material-ui/core';
import { Route, Switch } from 'react-router-dom';
import { createMuiTheme } from "@material-ui/core";
// Context
import { MainContext } from './context';
// Components
import SignIn from './components/SignIn/SignIn';
import Menu from './components/Menu/Menu';
import Tabs from './components/Tabs';
import { green } from '@material-ui/core/colors';

export default function App(props) {
  // Смена состояния темы 
  const [darkMode, setDarkMode] = React.useState(false);

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
              <Route path="/tabs" component={Tabs} />
            </Switch>
          </div>
        </Box>
      </ThemeProvider>
    </MainContext.Provider>
  );
}