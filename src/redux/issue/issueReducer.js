import { ISSUE_REQUEST, ISSUE_NAME, ISSUE_ERROR } from "./issueActionTypes";

const initialState = {
  loading: false,
  issues: [],
  error: "",
};

export const issueReducer = (state = initialState, action) => {
  switch (action.type) {
    case ISSUE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ISSUE_NAME:
      return {
        ...state,
        loading: false,
        issues: action.payload,
      };

    case ISSUE_ERROR:
      return {
        ...state,
        loading: false,
        issues: [],
        error: action.payload,
      };

    default:
      return state;
  }
};
