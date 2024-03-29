import { LOADING_DATA, USER_LOGIN, USER_LOGOUT } from "../actions/types"
import isEmpty from "../utils/isEmpty"

const initialState = {
  isAuthenticated: false,
  user: {},
  loading: false
}

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOADING_DATA:
      return {
        ...state,
        loading: true
      }
    case USER_LOGIN:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
        loading: false
      }
    case USER_LOGOUT:
      return {
        isAuthenticated: false,
        user: {},
        loading: false
      }
    default:
      return state
  }
}
