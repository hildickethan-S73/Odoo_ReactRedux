import React from 'react';

const Restaurants = props => {
  let interior;
  props = props.props
  console.log(props);
  
  if (!props.restaurants) {
    interior = <div>Loading...</div>;
  }

  interior = props.restaurants.map((restaurant) => {
    console.log(restaurant);
    return (
      <li 
        key={restaurant.name} 
        className="list-group-item"
        // onClick={() => props.selectProduct(restaurant)}
        >
        {restaurant.name}
      </li>
    );
  });

  return (
    <ul className="list-group col-sm-4 book-list">
      {interior}
    </ul>
  );
};

export default Restaurants;
