import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

import RestaurantList from './Restaurant/RestaurantList';
import RestaurantDetail from './Restaurant/RestaurantDetail';
import AuthRegister from './Auth/AuthRegister';
import AuthLogin from './Auth/AuthLogin';
import Profile from './Auth/Profile';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <RestaurantList />
          <RestaurantDetail />
          <Switch>
              <Route exact path="/register" component={AuthRegister}/>
              <Route exact path="/login" component={AuthLogin}/>
              <Route exact path="/" component={Profile}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
