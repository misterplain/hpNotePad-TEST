import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";

// import { authReducer } from "./reducers/authReducers";
// import { userReducer } from "./reducers/userReducers";
// import { blogReducer } from "./reducers/blogReducers";

import { dashboardReducer } from "./reducers/dashboardReducers";

const reducer = combineReducers({
  dashboard: dashboardReducer,
});

const initialState = {};

const middleware = [thunk, logger];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
