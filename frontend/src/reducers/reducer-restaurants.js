// state arg is not application state, only state this reducer 
// is responsible for
export default function(state = null, action) {
    switch(action.type) {
      case 'RESTAURANT_LOAD':
        return {
          ...state,
          restaurants: action.payload
        }
      default:
        return state;
    }
  }
  