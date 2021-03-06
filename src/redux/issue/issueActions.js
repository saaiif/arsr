import axios from "axios";
import { ISSUE_REQUEST, ISSUE_NAME, ISSUE_ERROR } from "./issueActionTypes";

export const fetchIssueRequest = () => {
  return {
    type: ISSUE_REQUEST,
  };
};

export const fetchIssueSuccess = (issues) => {
  return {
    type: ISSUE_NAME,
    payload: issues,
  };
};
export const fetchIssueFailure = (error) => {
  return {
    type: ISSUE_ERROR,
    payload: error,
  };
};

export const fetchIssue = (query, reponame) => {
  return function (dispatch) {
    dispatch(fetchIssueRequest());
    axios
      .get(`https://api.github.com/repos/${query}/${reponame}/issues`)
      .then((response) => {
        const issues = response.data;
        dispatch(fetchIssueSuccess(issues));
      })
      .catch((error) => {
        dispatch(fetchIssueFailure(error));
      });
  };
};
