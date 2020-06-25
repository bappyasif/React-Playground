import axios from "axios";
import {
  FETCH_USER_REQUEST,
  USER_REQUEST_SUCCESS,
  USER_REQUEST_FAILURE,
} from "../UserTypes";

export let fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};

export let userRequestSuccess = (user) => {
  return {
    type: USER_REQUEST_SUCCESS,
    payload: user,
  };
};

export let userRequstFailure = (error) => {
  return {
    type: USER_REQUEST_FAILURE,
    payload: error,
  };
};

export let httpRequest = () => {
  return (dispatch) => {
    dispatch(fetchUserRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        let users = response.data;
        dispatch(userRequestSuccess(users));
      })
      .catch((error) => {
        let errorMsg = error.message;
        dispatch(userRequstFailure(errorMsg));
      });
  };
};
