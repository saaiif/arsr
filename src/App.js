import React, { useState, useEffect } from "react";
import { Provider } from "react-redux";
import "./App.css";
import Search from "./Components/Repos/Search/Search";
import store from "./redux/store";
import Issues from "./Components/Issues/Issue";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App(props) {
  return (
    <Provider store={store}>
      <Switch>
        <div className='App'>
          <h1>Saif</h1>
          <Route path='/' component={Search} exact />
          <Route path='/repoissues' component={Issues} {...props} />
          {/* <Issues /> */}
        </div>
      </Switch>
    </Provider>
  );
}

export default App;
