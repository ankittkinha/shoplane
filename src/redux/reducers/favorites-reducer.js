import { ActionTypes } from "../constants/action-types";

const initialState = {
    favorites: []
}

export const favoritesReducer = (state=initialState, {type, payload}) => {
    switch(type){
        case ActionTypes.ADD_TO_FAVORITES:
            state.favorites.push(payload)
            return {
                ...state
            }
        case ActionTypes.REMOVE_FROM_FAVORITES:
            let newFav = state.favorites.filter(item => item.id !== payload)
            state.favorites = newFav
            return {
                ...state
            }
        default: 
            return state;
    }
}