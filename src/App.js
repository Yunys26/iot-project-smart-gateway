import React from 'react';
import { Route, Switch } from 'react-router-dom';
// Components
import SignIn from './components/SignIn/SignIn';
import Menu from './components/Menu/Menu';


export default function App(props) {
  return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={SignIn}/>
          <Route path="/menu" component={Menu} />
        </Switch>
      </div>
  );
}

