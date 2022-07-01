import { legacy_createStore as createStore, applyMiddlwear } from "redux";
import rootReducer from "./allReducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddlwear(thunk))
);
export default store;
