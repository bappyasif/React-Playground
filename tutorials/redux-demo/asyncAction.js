let redux = require("redux");
let thunkMiddleware = require("redux-thunk").default;
let axios = require("axios");
let createStore = redux.createStore;
let applyMiddleware = redux.applyMiddleware;

// App Object
let initialState = {
  loading: false,
  users: [],
  error: "",
};

// Action Types
let FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
let FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
let FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

// Action Creators
let fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

let fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};

let fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};

// Reducer Function
let reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
        error: "",
      };
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
  }
};

// Async Action Creator Functionality
let fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUsersRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        // response.data
        let users = response.data.map((user) => user.id);
        dispatch(fetchUsersSuccess(users));
      })
      .catch((error) => {
        // error.message
        dispatch(fetchUsersFailure(error.message));
      });
  };
};

// Redux Store
let store = createStore(reducer, applyMiddleware(thunkMiddleware));
// let store = createStore(reducer);
store.subscribe(() => {
  console.log("Current State : ", store.getState());
});
store.dispatch(fetchUsers());
