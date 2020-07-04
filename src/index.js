import React from "react";

import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";

import App from "./containers/App";
import configureStore from "./state/store";

const reduxStore = configureStore(window.REDUX_INITIAL_DATA);

ReactDOM.render(
  <ReduxProvider store={reduxStore}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ReduxProvider>,
  document.getElementById("root"),
);
