import { REPO_NAME, REPO_REQUEST, REPO_ERROR } from "./repoActionTypes";

const initialState = {
  loading: false,
  users: [],
  error: "",
};

export const repoReducer = (state = initialState, action) => {
  switch (action.type) {
    case REPO_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case REPO_NAME:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };

    case REPO_ERROR:
      return {
        ...state,
        loading: false,
        users: [],
        error: action.payload,
      };

    default:
      return state;
  }
};
