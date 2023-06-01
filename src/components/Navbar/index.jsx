import React, { useEffect, useState } from "react";
import cartImg from "../../images/cart.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import LoggedIn from "../LoggedIn";
import LoggedOut from "../LoggedOut";
import emptyHeartImg from "../../images/heart-3510.svg";

export default function Navbar() {

    const cartNum = useSelector(state => state.cart.numberCart);
    const [loginStatus, setLoginStatus] = useState(false);

    useEffect(() => {
        let token = localStorage.getItem("token")
        if (!token) {
            setLoginStatus(false);
        } else {
            setLoginStatus(true);
        }
    }, [loginStatus])

    return (
        <div className="navbar-component">
            <nav className="navbar py-1 ">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand"><span className="appName-nav">SHOP<span className="hName-nav">LANE</span></span></Link>

                    <form className="d-flex cta main-drop-nav" role="search">
                        {  (!loginStatus) ? <LoggedOut /> : <LoggedIn /> }

                        <Link to="/favorites" className="btn btn-outline btn2-nav">
                            <img src={emptyHeartImg} height="45px" width="45px" alt="image" />
                        </Link>

                        <Link to="/cart" className="btn btn-outline btn2-nav" type="submit">
                            <img src={cartImg} height={"90%"} alt="image" />
                            <span className="cart-items-num">{(cartNum > 0) ? cartNum : null}</span>
                        </Link>

                    </form>
                </div>
            </nav>
            <hr />

            <div className='categoriesbar-component'>
                <div>
                    <ul className='category-bar'>
                        <li className="products-title"><Link to="/"><i>All</i></Link></li>
                        <li className="products-title"><Link to="/products/electronics"><i>Electronics</i></Link></li>
                        <li className="products-title"><Link to="/products/jewelery"><i>Jewellery</i></Link></li>
                        <li className="products-title"><Link to="/products/men's clothing"><i>Men's Clothing</i></Link></li>
                        <li className="products-title"><Link to="/products/women's clothing"><i>Women's Clothing</i></Link></li>
                    </ul>
                </div>
                <hr />
            </div>
        </div>
    );
}
