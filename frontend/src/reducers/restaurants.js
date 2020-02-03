import {
  RESTAURANT_LOAD,
  RESTAURANT_UNLOAD
} from '../constants/actionTypes';

export default (state = [], action) => {
    switch(action.type) {
      case RESTAURANT_LOAD:
        return action.payload

      case RESTAURANT_UNLOAD:
          return [];
        
      default:
        return state;
    }
}
  