import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import "./styles.css";
import store from "./store";
import { Provider } from "react-redux";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>,
  rootElement
);
