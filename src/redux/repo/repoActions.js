import axios from "axios";
import { REPO_NAME, REPO_REQUEST, REPO_ERROR } from "./repoActionTypes";

export const fetchUserRequest = () => {
  return {
    type: REPO_REQUEST,
  };
};

export const fetchUserSuccess = (users) => {
  return {
    type: REPO_NAME,
    payload: users,
  };
};
export const fetchUserFailure = (error) => {
  return {
    type: REPO_ERROR,
    payload: error,
  };
};

export const fetchUsers = (query) => {
  console.log(`https://api.github.com/users/${query}/repos`);
  return function (dispatch) {
    dispatch(fetchUserRequest());
    axios
      .get(`https://api.github.com/users/${query}/repos`)
      .then((response) => {
        dispatch(fetchUserSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchUserFailure(error.message));
      });
  };
};
