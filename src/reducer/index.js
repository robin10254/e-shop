import authReducer from "./authReducer";
import orderReducer from "./orderFunctionReducer";
import orderStateReducer from "./orderStateReducer";
import productReducer from "./productFunctionReducer";
import productStateReducer from "./productStateReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  productReducer: productReducer,
  orderReducer: orderReducer,
  orderStateReducer: orderStateReducer,
  productStateReducer: productStateReducer,
  authReducer: authReducer,
});

export default rootReducer;
