import React from "react";
import { Provider } from "react-redux";
import { Switch, Route } from "react-router";
import "./App.css";
import Search from "./Components/Repos/Search/Search";
import store from "./redux/store";
import Issue from "./Components/Issues/Issue";
import Comment from "./Components/Comments/Comment";

function App() {
  return (
    <Provider store={store}>
      <Switch>
        <Route exact path='/' component={Search} />
        <Route path='/issue' component={Issue} />
        <Route path='/comment' component={Comment} />
      </Switch>
    </Provider>
  );
}

export default App;
