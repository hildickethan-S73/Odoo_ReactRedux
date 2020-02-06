import {
  RESTAURANTS_LOAD,
  RESTAURANTS_UNLOAD,
  RESTAURANT_SELECTED,
  RESTAURANT_CHANGED,
  RESTAURANT_UPDATE,
  RESTAURANT_CREATE,
  RESTAURANT_DELETE
} from '../constants/actionTypes';

export default (state = {}, action) => {
  let list;
  switch(action.type) {
    case RESTAURANTS_LOAD: // load restaurant list //// {restaurants: {list:[]}}
      return {
        ...state,
        list: action.payload
      }

    case RESTAURANTS_UNLOAD: // delete restaurant state
      return {};
    
    case RESTAURANT_SELECTED: // select restaurant //// {restaurants: {activeRestaurant:{}}}
      return {
        ...state,
        activeRestaurant: action.payload
      };

    case RESTAURANT_CHANGED: // change active restaurant values //// {restaurants: {activeRestaurant:{}}}
      return {
        ...state,
        activeRestaurant: {
          ...action.payload.activeRestaurant,
          [action.payload.target.name]: action.payload.target.value
        }
      };
    
    case RESTAURANT_UPDATE:
      return {
        ...state,
        activeRestaurant: action.payload
      };
      
    case RESTAURANT_CREATE:
      list = state.list;
      list.push(action.payload);
      return {
        ...state,
        list: list
      }
    case RESTAURANT_DELETE:
      list = state.list;
      list.splice(list.indexOf(action.payload),1);
      return {
        ...state,
        list: list,
        activeRestaurant: {}
      }
        
        
      default:
        return state;
    }
}
  