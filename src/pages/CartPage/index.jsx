import React from 'react';
import Navbar from "../../components/Navbar";
import CartProduct from '../../components/CartProduct';
import { useSelector } from 'react-redux';
import CartSummary from '../../components/CartSummary';
import EmptyCart from '../../components/EmptyCart';

export default function CartPage() {

  const { numberCart, Carts } = useSelector(state => state.cart);

  return (
    <div>
      <Navbar />

      <div className="row">
        <div className="col-sm-10 mb-3 mb-sm-0">
          {
            (Carts.length !== 0) ? Carts.map(product => <CartProduct key={product.id} data={product} />) : <EmptyCart />
          }

        </div>
        <div className="col-sm-2 summary-div">
          <div className="card sticky-summary">
            <CartSummary data={Carts} />
          </div>
        </div>
      </div>
    </div>
  )
}
