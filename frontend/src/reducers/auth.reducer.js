import {
    AUTH_REGISTER, AUTH_LOGIN, AUTH_LOGOUT
} from '../constants/actionTypes';
  
  export default (state = {}, action) => {
    switch(action.type) {
        case AUTH_REGISTER:
            return {
                user: action.payload
            }
        case AUTH_LOGIN:
            if (action.payload.error !== undefined) {
                console.error(action.payload.error);
                
                return {
                    ...state,
                    user: {},
                    error: action.payload.error
                }
            }
            return {
                user: action.payload
            }
        case AUTH_LOGOUT:
            return {
                user: {}
            }
          
        default:
          return state;
      }
  }
    