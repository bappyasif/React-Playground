import {
  HTTP_REQUEST_SUCCESS,
  HTTP_REQUEST_FAILURE,
  FETCH_USERS_REQUEST,
} from "../../Users/UserTypes";

let initialState = {
  loading: false,
  users: [],
  error: "",
};

let usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case HTTP_REQUEST_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        error: "",
      };
    case HTTP_REQUEST_FAILURE:
      return {
        loading: false,
        users: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default usersReducer;
