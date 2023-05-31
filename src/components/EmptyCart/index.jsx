import React from 'react';
import { Link } from 'react-router-dom';

export default function EmptyCart() {
    return (
        <div class="card text-center" style={{ width: "60%", margin: "auto", padding: 0 }}>
            <div class="card-header text-center">
                Empty Cart
            </div>
            <div class="card-body">
                <h5 class="card-title text-center">Your cart is empty.</h5>
                <p class="card-text text-center">Surf our app and buy products you like.</p>
                <div className='text-center'>
                    <Link to="/" class="btn btn-primary "><span className='btn-txt-clr'>Go Shopping</span></Link>
                </div>

            </div>
        </div>
    )
}
