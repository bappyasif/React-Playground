import {
  FETCH_USER_REQUEST,
  USER_REQUEST_SUCCESS,
  USER_REQUEST_FAILURE,
} from "../UserTypes";

let initialState = {
  loading: false,
  users: [],
  error: "",
};

let userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        ...state,
        loading: true,
        users: [],
        error: "",
      };
    case USER_REQUEST_SUCCESS:
      return {
        // ...state,
        loading: false,
        users: action.payload,
        error: "",
      };
    case USER_REQUEST_FAILURE:
      return {
        // ...state,
        loading: false,
        users: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
