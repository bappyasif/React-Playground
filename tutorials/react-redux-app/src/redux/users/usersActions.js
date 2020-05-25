import axios from "axios";

import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from "./usersType";

export let fetchUsersRequest = () => {
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

export let fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest);
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        let users = response.data;
        dispatch(fetchUsersSuccess(users));
      })
      .catch((error) => {
        let errorMsg = error.message;
        dispatch(fetchUsersFailure(errorMsg));
      });
  };
};
