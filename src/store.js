
import { createStore } from "redux";
import { cartReducer } from "./redux/reducers/cart-reducer";
import { allReducers } from "./redux/reducers";

const mystore = createStore(allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
export default mystore;