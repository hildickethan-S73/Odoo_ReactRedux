import React, { Component } from 'react';
import RestaurantList from './Restaurant/RestaurantList';
import RestaurantDetail from './Restaurant/RestaurantDetail';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <RestaurantList />
          <RestaurantDetail />
        </div>
      </div>
    );
  }
}

export default App;
