import { combineReducers } from "redux";
import Reducers from "./Reducer";
import Reset from "./Reset";
import ResetModal2 from "./ResetModal2";

const AllReducers = combineReducers({
    reducer: Reducers,
    reSet: Reset,
    reSet2: ResetModal2
})
export default AllReducers