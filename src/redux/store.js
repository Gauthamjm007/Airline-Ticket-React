import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { currencyReducer, ticketsReducer } from "./reducers/loadDataReducer";
import filters from "./reducers/filterReducer";

const rootReducer = combineReducers({
  ticketsBoard: ticketsReducer,
  currencyRate: currencyReducer,
  filters
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
