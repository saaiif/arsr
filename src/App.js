import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import Search from "./Components/Repos/Search/Search";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <Search />
      </div>
    </Provider>
  );
}

export default App;
