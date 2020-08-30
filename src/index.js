import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore, applyMiddleware } from "redux";
import reducer from "./store/reducer";
import { Provider } from "react-redux";
const midd1 = (store) => {
  return (next) => {
    return (action) => {
      console.log(action);

      const result = next(action);

      return result;
    };
  };
};
const mystore = createStore(reducer, applyMiddleware(midd1));
ReactDOM.render(
  <React.StrictMode>
    <Provider store={mystore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
