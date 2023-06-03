import { ActionTypes } from "../constants/action-types";

export const addToCart = (product) => {
    return {
        type: ActionTypes.ADD_TO_CART,
        payload: product
    }
}

export const deleteFromCart = (product) => {
    return {
        type: ActionTypes.DELETE_FROM_CART,
        payload: product
    }
}

export const increaseQuantity = (id) => {
    return {
        type: ActionTypes.INCREASE_QUANTITY,
        payload: id
    }
}

export const decreaseQuantity = (id) => {
    return {
        type: ActionTypes.DECREASE_QUANTITY,
        payload: id
    }
}