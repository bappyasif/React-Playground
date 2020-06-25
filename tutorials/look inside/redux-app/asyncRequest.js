let redux = require("redux");
let thunkMiddleware = require("redux-thunk").default;
let axios = require("axios");

let applyingMiddleware = redux.applyMiddleware;
let createStore = redux.createStore;

// State Object
let initialState = {
  loading: false,
  users: [],
  error: "",
};

// state actions
let FETCH_USER_REQUEST = "FETCH_USER_REQUEST";
let FETCH_REQUEST_SUCCESSFUL = "FETCH_REQUEST_SUCCESSFUL";
let FETCH_REQUEST_FAILURE = "FETCH_REQUEST_FAILURE";

// actions creators
let fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};

let fetchRequestSuccessful = (users) => {
  return {
    type: FETCH_REQUEST_SUCCESSFUL,
    payload: users,
  };
};

let fetchRequestFailure = (error) => {
  return {
    type: FETCH_REQUEST_FAILURE,
    payload: error,
  };
};

let httpRequest = () => {
  return function (dispatch) {
    dispatch(fetchUserRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        let usersID = response.data.map((user) => user.id);
        dispatch(fetchRequestSuccessful(usersID));
      })
      .catch((error) => {
        dispatch(fetchRequestFailure(error.message));
      });
  };
};

// actions reducer
let reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        ...state,
        loading: true,
        // users: [],
        // error: "",
      };
    case FETCH_REQUEST_SUCCESSFUL:
      return {
        loading: false,
        users: action.payload,
        error: "",
      };
    case FETCH_REQUEST_FAILURE:
      return {
        loading: false,
        users: "",
        error: action.payload,
      };
    default:
      return { ...state };
  }
};

// redux store
let store = createStore(reducer, applyingMiddleware(thunkMiddleware));
store.subscribe(() => console.log("Initial State : ", store.getState()));
store.dispatch(httpRequest());
