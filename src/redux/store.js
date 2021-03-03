import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { repoReducer } from "../redux/repo/repoReducer";

const store = createStore(repoReducer, applyMiddleware(thunk));

export default store;
