import React from 'react';

const Restaurants = props => {
  let restaurantList = props.restaurants.list;
  if (!restaurantList) {
    return (
      <div>Loading...</div>
    );
  }

  return (
    <ul className="list-group col-sm-4 book-list">
      {
        restaurantList.map((restaurant,index) => {
          return (
            <li 
              key={index} 
              className="list-group-item"
              onClick={() => props.selectRestaurant(restaurant)}
              >
              <div>{restaurant.name}</div>
              <span>{restaurant.author}</span>
            </li>
          )
        })
      }
    </ul>
  );
};

export default Restaurants;
