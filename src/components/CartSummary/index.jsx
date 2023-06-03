import React, { useState } from 'react'
import { useSelector } from 'react-redux';

export default function CartSummary(props) {

    let cartNum = useSelector(state => state.cart.numberCart)

    let subtotal = 0;

    if (props.data) {
        props.data.forEach(item => subtotal += (item.price * item.quantity));
    }

    const [response, setResponse] = useState({
        textMessage: "",
        alertClass: ""
    })

    const shippingCharges = (props.data.length !== 0) ? 5 : 0;  //hard coding shipping charge as we'll not receive it via api
    const taxEstimate = (subtotal * 5) / 100; //using 5% tax

    const removeAlert = () => {
        setResponse({
            textMessage: "",
            alertClass: ""
        });
    };

    const onClickHandler = () => {
        if (cartNum > 0) {
            if (localStorage.getItem("token")) {
                setResponse({
                    textMessage: "Your order has been placed",
                    alertClass: "alert alert-success"
                })
            } else {
                setResponse({
                    textMessage: "You should login before placing your order.",
                    alertClass: "alert alert-danger"
                })
            }
        } else {
            setResponse({
                textMessage: "Please add items to cart before placing order",
                alertClass: "alert alert-danger"
            });
        };
        setTimeout(removeAlert, 2500)
    }

    return (
        <div>
            <div className="card-body greyish-back" style={{ width: "100%" }}>
                <h5 className="card-title">Order Summary</h5>
                <p className="card-text cart-summary-text">
                    <span>Subtotal</span>
                    <span>&#36; {Math.round(subtotal)}</span>
                </p>
                <p className="card-text cart-summary-text">
                    <span>Shipping Charges</span>
                    <span>&#36; {shippingCharges}</span>
                </p>
                <p className="card-text cart-summary-text">
                    <span>Tax Estimate</span>
                    <span>&#36; {Math.round(taxEstimate)}</span>
                </p>
                <p className="card-text cart-summary-text">
                    <span>Order Total</span>
                    <span>&#36; {(Math.round(subtotal) + shippingCharges + Math.round(taxEstimate))}</span>
                </p>
                <div onClick={onClickHandler} className="btn btn-primary w-100">Place Order</div>

            </div>
            <div className={`${response.alertClass} mt-2`}>
                {response.textMessage}
            </div>
        </div>

    )
}
