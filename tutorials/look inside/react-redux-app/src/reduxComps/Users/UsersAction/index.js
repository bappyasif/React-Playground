import axios from "axios";

import {
  FETCH_USERS_REQUEST,
  HTTP_REQUEST_SUCCESS,
  HTTP_REQUEST_FAILURE,
} from "../../Users/UserTypes";

export let fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

export let httpRequestSuccess = (users) => {
  return {
    type: HTTP_REQUEST_SUCCESS,
    payload: users,
  };
};

export let httpRequestFailure = (error) => {
  return {
    type: HTTP_REQUEST_FAILURE,
    payload: error,
  };
};

export let fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest);
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        let users = res.data;
        dispatch(httpRequestSuccess(users));
      })
      .catch((error) => {
        let errorMsg = error.message;
        dispatch(httpRequestFailure(errorMsg));
      });
  };
};
