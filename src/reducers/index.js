import { combineReducers } from "redux";
import DestinationReducer from "./reducer-destination";
import DistanceReducer from "./reducer-send-dest";
import FilterReducer from "./reducer-send-filters";

const rootReducer = combineReducers({
    destinations: DestinationReducer,
    distance: DistanceReducer,
    filters: FilterReducer,
  });
  
  export default rootReducer;