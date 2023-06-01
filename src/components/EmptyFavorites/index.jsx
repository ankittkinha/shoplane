import React from 'react';
import { Link } from 'react-router-dom';

export default function EmptyFavorites() {
    return (
        <div className="card text-center" style={{ width: "60%", margin: "auto" }}>
            <div className="card-header text-center">
                Empty Favorites
            </div>
            <div className="card-body">
                <h5 className="card-title text-center">Your favorites list is empty.</h5>
                <p className="card-text text-center">Surf our app and like products to add to your wishlist.</p>
                <div className='text-center'>
                    <Link to="/" className="btn btn-primary"><span className='btn-txt-clr'>Go Shopping</span></Link>
                </div>

            </div>
        </div>
    )
}
