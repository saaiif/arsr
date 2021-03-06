import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { repoReducer } from "./repo/repoReducer";
import { issueReducer } from "./issue/issueReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { commentReducer } from "./comment/commentReducer";

import logger from "redux-logger";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (e) {
    console.log(e);
  }
};

const persistedState = loadState();

const rootReducer = combineReducers({
  user: repoReducer,
  issue: issueReducer,
  comment: commentReducer,
});

const store = createStore(
  rootReducer,
  persistedState,
  composeWithDevTools(applyMiddleware(logger, thunk))
);

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
