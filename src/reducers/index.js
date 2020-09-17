import { combineReducers } from "redux";
import DestinationReducer from "./reducer-destination";
const rootReducer = combineReducers({
    destinations: DestinationReducer
  });
  
  export default rootReducer;