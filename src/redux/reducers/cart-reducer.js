import { ActionTypes } from "../constants/action-types";

const initialState = {
    numberCart: 0,
    Carts: []
};

export const cartReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.ADD_TO_CART:
            if (state.numberCart === 0) {
                console.log("new item");
                let item = {
                    ...payload,
                    quantity: 1,
                };
                state.Carts.push(item);
            } else {
                let check = false;
                state.Carts.map((item, index) => {
                    if (item.id === payload.id) {
                        console.log("id matched");
                        state.Carts[index].quantity++;
                        check = true;
                    }
                });
                if (!check) {
                    let _item = {
                        ...payload,
                        quantity: 1,
                    };
                    state.Carts.push(_item);
                }
            }
            return {
                ...state,
                numberCart: state.numberCart + 1,
            };

        case ActionTypes.DELETE_FROM_CART:
            let newCart = state.Carts.filter(item => item.id !== payload.id);
            state.Carts = newCart;
            return {
                ...state,
                numberCart: state.numberCart - payload.quantity,
            };

        case ActionTypes.INCREASE_QUANTITY:
            state.Carts.forEach(item => {
                if (item.id === payload) {
                    item.quantity++
                }
            })
            return {
                ...state,
                numberCart: state.numberCart + 1
            };

        case ActionTypes.DECREASE_QUANTITY:
            state.Carts.forEach(item => {
                    if (item.id === payload) {
                        item.quantity--
                }
            })
            return {
                ...state,
                numberCart: state.numberCart - 1
            }
        default:
            return state;
    }
};
