import { ActionTypes } from "../constants/action-types";

const initialState = {
    favorites: []
}

export const favoritesReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.ADD_TO_FAVORITES:
            return {
                ...state,
                favorites: [...state.favorites, payload]
            }
        case ActionTypes.REMOVE_FROM_FAVORITES:
            return {
                ...state,
                favorites: state.favorites.filter(item => item.id !== payload)
            }
        default:
            return state;
    }
}