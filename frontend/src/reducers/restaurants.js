import {
  RESTAURANT_LOAD,
  RESTAURANT_UNLOAD,
  RESTAURANT_SELECTED
} from '../constants/actionTypes';

export default (state = {}, action) => {
    switch(action.type) {
      case RESTAURANT_LOAD:
        return {
          ...state,
          list: action.payload
        }

      case RESTAURANT_UNLOAD:
          return {};

      case RESTAURANT_SELECTED:
        return {
          ...state,
          activeRestaurant: action.payload
        };
        
      default:
        return state;
    }
}
  