// redux store
let redux = require("redux");

// applying middlewares
let thunkMiddleware = require("redux-thunk").default;

let axios = require("axios");

let applyingMiddleware = redux.applyMiddleware;

let createStore = redux.createStore;

// state object
let initialState = {
  loading: false,
  users: [],
  error: "",
};

// fetch actions
let FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
let FETCH_REQUEST_SUCCESS = "FETCH_REQUEST_SUCCESS";
let FETCH_REQUEST_FAILURE = "FETCH_REQUEST_FAILURE";

// actions creators
let fetchUserRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

let fetchRequestSuccess = (users) => {
  return {
    type: FETCH_REQUEST_SUCCESS,
    payload: users,
  };
};

let fetchRequestFailure = (error) => {
  return {
    type: FETCH_REQUEST_FAILURE,
    payload: error,
  };
};

let fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUserRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        // response.data is the users
        let users = response.data.map((user) => user.id);
        dispatch(fetchRequestSuccess(users));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(fetchRequestFailure(error.message));
      });

    // dispatch(fetchUserRequest());
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((response) => {
    //     // console.log(response.data);
    //     let usersID = response.data.map((user) => user.id);
    //     dispatch(fetchRequestSuccess(usersID));
    //   })
    //   .catch((error) => {
    //     // console.log(error.message);
    //     dispatch(fetchRequestFailure(error.message));
    //   });

    // axios
    //   .get("https://jsonplaceholder.typicode.com/users")
    //   .then((response) => {
    //     console.log(response.data);
    //     let usersID = response.data.map((user) => user.id);
    //     dispatch(fetchRequestSuccess(usersID));
    //   })
    //   .catch((error) => {
    //     console.log(error.message);
    //     dispatch(fetchRequestFailure(error.message));
    //   });
  };
};

// actions reducer
let reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
        // users: [],
        // error: "",
      };
    case FETCH_REQUEST_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        error: "",
      };
    case FETCH_REQUEST_FAILURE:
      return {
        loading: false,
        users: [],
        error: action.payload,
      };
  }
};

let store = createStore(reducer, applyingMiddleware(thunkMiddleware));

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(fetchUsers());

// const redux = require("redux");
// const thunkMiddleware = require("redux-thunk").default;
// const axios = require("axios");
// const createStore = redux.createStore;
// const applyMiddleware = redux.applyMiddleware;

// const initialState = {
//   loading: false,
//   users: [],
//   error: "",
// };

// const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
// const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
// const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

// const fetchUsersRequest = () => {
//   return {
//     type: FETCH_USERS_REQUEST,
//   };
// };

// const fetchUsersSuccess = (users) => {
//   return {
//     type: FETCH_USERS_SUCCESS,
//     payload: users,
//   };
// };

// const fetchUsersFailure = (error) => {
//   return {
//     type: FETCH_USERS_FAILURE,
//     payload: error,
//   };
// };

// const fetchUsers = () => {
//   return function (dispatch) {
//     dispatch(fetchUsersRequest());
//     axios
//       .get("https://jsonplaceholder.typicode.com/users")
//       .then((response) => {
//         // response.data is the users
//         const users = response.data.map((user) => user.id);
//         dispatch(fetchUsersSuccess(users));
//       })
//       .catch((error) => {
//         // error.message is the error message
//         dispatch(fetchUsersFailure(error.message));
//       });
//   };
// };

// const reducer = (state = initialState, action) => {
//   console.log(action.type);
//   switch (action.type) {
//     case FETCH_USERS_REQUEST:
//       return {
//         ...state,
//         loading: true,
//       };
//     case FETCH_USERS_SUCCESS:
//       return {
//         loading: false,
//         users: action.payload,
//         error: "",
//       };
//     case FETCH_USERS_FAILURE:
//       return {
//         loading: false,
//         users: [],
//         error: action.payload,
//       };
//   }
// };

// const store = createStore(reducer, applyMiddleware(thunkMiddleware));
// store.subscribe(() => {
//   console.log(store.getState());
// });
// store.dispatch(fetchUsers());

/**
// redux store
let redux = require("redux");

// applying middlewares
let applyingMiddleware = redux.applyMiddleware;
let thunkMiddleware = require("redux-thunk").default();

let axios = require("axios");
let createStore = redux.createStore;

// state object
let initialState = {
  loading: false,
  users: [],
  error: "",
};

// fetch actions
let FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
let FETCH_REQUEST_SUCCESS = "FETCH_REQUEST_SUCCESS";
let FETCH_REQUEST_FAILURE = "FETCH_REQUEST_FAILURE";

// actions creators
let fetchUserRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

let fetchRequestSuccess = (users) => {
  return {
    type: FETCH_REQUEST_SUCCESS,
    payload: users,
  };
};

let fetchRequestFailure = (error) => {
  return {
    type: FETCH_REQUEST_FAILURE,
    payload: error,
  };
};

let fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUserRequest());
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log(response.data);
        let usersID = response.data.map((user) => user.id);
        dispatch(fetchRequestSuccess(usersID));
      })
      .catch((error) => {
        console.log(error.message);
        dispatch(fetchRequestFailure(error.message));
      });

    // axios
    //   .get("https://jsonplaceholder.typicode.com/users")
    //   .then((response) => {
    //     console.log(response.data);
    //     let usersID = response.data.map((user) => user.id);
    //     dispatch(fetchRequestSuccess(usersID));
    //   })
    //   .catch((error) => {
    //     console.log(error.message);
    //     dispatch(fetchRequestFailure(error.message));
    //   });
  };
};

// actions reducer
let reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
        // users: [],
        // error: "",
      };
    case FETCH_REQUEST_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        error: "",
      };
    case FETCH_REQUEST_FAILURE:
      return {
        loading: false,
        users: [],
        error: action.payload,
      };
  }
};

let store = createStore(reducer, applyingMiddleware(thunkMiddleware));

let unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(fetchUsers());

unsubscribe();
 */
