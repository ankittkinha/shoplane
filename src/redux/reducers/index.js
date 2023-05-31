import { cartReducer } from "./cart-reducer";
import { favoritesReducer } from "./favorites-reducer";
import { combineReducers } from "redux";

export const allReducers = combineReducers({
    cart: cartReducer,
    favorites: favoritesReducer

})