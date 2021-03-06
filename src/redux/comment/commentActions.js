import axios from "axios";
import {
  COMMENT_REQUEST,
  COMMENT_NAME,
  COMMENT_ERROR,
} from "./commentActionTypes";

export const fetchCommentRequest = () => {
  return {
    type: COMMENT_REQUEST,
  };
};

export const fetchCommentSuccess = (comments) => {
  return {
    type: COMMENT_NAME,
    payload: comments,
  };
};
export const fetchCommentFailure = (error) => {
  return {
    type: COMMENT_ERROR,
    payload: error,
  };
};

export const fetchComment = (a, b, c) => {
  // console.log(`https://api.github.com/repos/${a}/${b}/issues/${c}/comments`);
  return function (dispatch) {
    dispatch(fetchCommentRequest());
    axios
      .get(`https://api.github.com/repos/${a}/${b}/issues/${c}/comments`)
      .then((response) => {
        // const comments = response.data;
        dispatch(fetchCommentSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchCommentFailure(error));
      });
  };
};
