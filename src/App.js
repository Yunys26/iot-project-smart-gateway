import React from 'react';
import { Box, ThemeProvider } from '@material-ui/core';
import { Route, Switch } from 'react-router-dom';
import { createMuiTheme } from "@material-ui/core";
// Context
import { MainContext } from './context';
// Components
import SignIn from './components/SignIn/SignIn';
import Menu from './components/Menu/Menu';



export default function App(props) {

  const [darkMode, setDarkMode] = React.useState(false);

  const themeApp = createMuiTheme({
    palette: {
      type: (darkMode && "dark") || "light",
    },
  });

  return (
    <MainContext.Provider value={{ setDarkMode}}>
      <ThemeProvider theme={themeApp}>
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

