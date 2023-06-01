import React from 'react';
import { Link } from 'react-router-dom';

export default function EmptyCart() {
    return (
        <div className="card text-center" style={{ width: "60%", margin: "auto", padding: 0 }}>
            <div className="card-header text-center">
                Empty Cart
            </div>
            <div className="card-body">
                <h5 className="card-title text-center">Your cart is empty.</h5>
                <p className="card-text text-center">Surf our app and buy products you like.</p>
                <div className='text-center'>
                    <Link to="/" className="btn btn-primary "><span className='btn-txt-clr'>Go Shopping</span></Link>
                </div>

            </div>
        </div>
    )
}
