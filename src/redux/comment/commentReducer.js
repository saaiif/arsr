import {
  COMMENT_REQUEST,
  COMMENT_NAME,
  COMMENT_ERROR,
} from "./commentActionTypes";

const initialState = {
  loading: false,
  comments: [],
  error: "",
};

export const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMMENT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case COMMENT_NAME:
      return {
        ...state,
        loading: false,
        comments: action.payload,
      };

    case COMMENT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
