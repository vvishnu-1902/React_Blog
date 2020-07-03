import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { Provider } from "react-redux";
import {store} from "./Store"
import Home from './Components/Screens/Home';
import Category from './Components/Screens/Category';
import Single from './Components/Screens/Single';
import NotFound from './Components/Screens/NotFound';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route  path='/Category'>
            <Category />
          </Route>
          <Route  path='/Single'>
            <Single />
          </Route>
          <Route  path='/*'>
            <NotFound />
          </Route>
        </Switch>

        
      </BrowserRouter>
    </Provider>
  );
};

export default App;
