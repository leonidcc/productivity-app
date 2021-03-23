import { createStore, combineReducers, compose, applyMiddleware } from "redux";

import thunk from "redux-thunk";

import timerReducer from "./timerData";
import optionReducer from "./relojTypeData";
import postsReducer from "./postsData";

const rootReducer = combineReducers({
  test: timerReducer,
  option: optionReducer,
  posts: postsReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore() {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
}
