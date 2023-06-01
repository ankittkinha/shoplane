import React, { useState } from 'react'

export default function CartSummary(props) {
    let subtotal = 0;

    if (props.data) {
        props.data.forEach(item => subtotal += (item.price * item.quantity));
    }

    const shippingCharges = (props.data.length !== 0) ? 5 : 0;  //hard coding shipping charge as we'll not receive it via api
    const taxEstimate = (subtotal * 5) / 100; //using 5% tax


    return (
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

        </div>
    )
}
