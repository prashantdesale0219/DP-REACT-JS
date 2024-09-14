
import { combineReducers, legacy_createStore } from "redux";
import { reducer as countreducer } from "./CounterRedux/reducer";
import { reducer as themreducer} from "./ThemeRedux/reducer";

const rootReducer = combineReducers({countreducer,themreducer})
export const store = legacy_createStore(rootReducer)