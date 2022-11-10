import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "Global.css";
import { Provider } from "react-redux";
import store from "store/configureStore";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
