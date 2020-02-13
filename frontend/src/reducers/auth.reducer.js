import {
    AUTH_REGISTER, AUTH_LOGIN, AUTH_LOGOUT, AUTH_CHANGE, AUTH_LOAD_NEWUSER
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
        if (action.payload.error !== undefined) {
            console.error(action.payload.error)
            return {
                ...state,
                error: action.payload.error
            }
        }
        return {
            user: {}
        }
    case AUTH_CHANGE:
        return {
            newuser: {
                ...action.payload.newuser,
                [action.payload.target.name]: action.payload.target.value
            }
        }
        
    case AUTH_LOAD_NEWUSER:
        return {
            newuser: {}
        }

    default:
        return state;
    }
}
    