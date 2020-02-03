import React from 'react';

const Restaurants = props => {
  console.log(props.restaurants);
  
  if (!props) {
    return (
      <div>Loading...</div>
    );
  }

  return (
    <ul className="list-group col-sm-4 book-list">
      {
        props.restaurants.map((restaurant,index) => {
          // console.log(restaurant);
          return (
            <li 
              key={index} 
              className="list-group-item"
              // onClick={() => props.selectProduct(restaurant)}
              >
              {restaurant.name}
            </li>
          )
        })
      }
    </ul>
  );
};

export default Restaurants;
