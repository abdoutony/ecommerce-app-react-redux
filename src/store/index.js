import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import ProductReducer from "../reducers/ProductReducer";
const middleware = [thunk];

const reducers = {
  ProductReducer
};

const rootReducer = combineReducers(reducers);

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middleware)
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
