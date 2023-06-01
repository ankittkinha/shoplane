import { ActionTypes } from "../constants/action-types";

const initialState = {
    numberCart: 0,
    Carts: []
};

export const cartReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.ADD_TO_CART:
            if (state.numberCart === 0) {
                const item = {
                    ...payload,
                    quantity: 1,
                };
                return {
                    ...state,
                    numberCart: 1,
                    Carts: [item],
                };
            } else {
                let check = false;
                const updatedCarts = state.Carts.map((item) => {
                    if (item.id === payload.id) {
                        check = true;
                        return {
                            ...item,
                            quantity: item.quantity + 1,
                        };
                    }
                    return item;
                });
                if (!check) {
                    const newItem = {
                        ...payload,
                        quantity: 1,
                    };
                    return {
                        ...state,
                        Carts: [...state.Carts, newItem],
                        numberCart: state.numberCart + 1,
                    };
                }
                return {
                    ...state,
                    Carts: updatedCarts,
                    numberCart: state.numberCart + 1
                };
            }

        case ActionTypes.DELETE_FROM_CART:
            const newCart = state.Carts.filter((item) => item.id !== payload.id);
            return {
                ...state,
                Carts: [...newCart],
                numberCart: state.numberCart - payload.quantity,
            };

        case ActionTypes.INCREASE_QUANTITY:
            const increasedCarts = state.Carts.map((item) => {
                if (item.id === payload) {
                    return {
                        ...item,
                        quantity: item.quantity + 1,
                    };
                }
                return item;
            });
            return {
                ...state,
                Carts: increasedCarts,
                numberCart: state.numberCart + 1,
            };

        case ActionTypes.DECREASE_QUANTITY:
            const decreasedCarts = state.Carts.map((item) => {
                if (item.id === payload) {
                    return {
                        ...item,
                        quantity: item.quantity - 1,
                    };
                }
                return item;
            });
            return {
                ...state,
                Carts: decreasedCarts,
                numberCart: state.numberCart - 1,
            };

        default:
            return state;
    }
};