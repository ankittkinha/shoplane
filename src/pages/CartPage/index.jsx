import React from 'react';
import Navbar from "../../components/Navbar";
import CartProduct from '../../components/CartProduct';
import { useSelector } from 'react-redux';
import CartSummary from '../../components/CartSummary';
import EmptyCart from '../../components/EmptyCart';

export default function CartPage() {

  const { numberCart, Carts } = useSelector(state => state.cart);

  console.log(numberCart)
  console.log(Carts)
  return (
    <div>
      <Navbar />

      <div class="row">
      <div class="col-sm-10 mb-3 mb-sm-0">
        {
          (Carts.length !== 0) ? Carts.map(product => <CartProduct data={product} />) : <EmptyCart />
        }

        </div>
        <div class="col-sm-2">
          <div class="card sticky-summary">
            <CartSummary data={Carts} />
          </div>
        </div>
      </div>
    </div>
  )
}
