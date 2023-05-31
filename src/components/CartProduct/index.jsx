import React from "react";
import RatingStars from "../RatingStars";
import { BsPlusCircle, BsDashCircle } from "react-icons/bs";
import { useDispatch } from "react-redux";
import {decreaseQuantity, deleteFromCart, increaseQuantity} from "../../redux/actions/cart-actions";
import { Link } from "react-router-dom";

export default function CartProduct(props) {
    const dispatch = useDispatch();
    const { title, price, rating, image, quantity, description, id } = props.data;
    let dollars = Math.floor(price);
    let cents = (price.toFixed(2) - dollars).toFixed(2) * 100;

    const onRemovehandler = () => {
        dispatch(deleteFromCart(props.data));
    };

    const onIncreaseHandler = () => {
        dispatch(increaseQuantity(id));
    };

    const onDecreaseHandler = () => {
        if (quantity > 1) {
            dispatch(decreaseQuantity(id));
        } else {
            dispatch(deleteFromCart(props.data));
        }
    };

    return (
        <div>
            <div class="card mb-3" style={{ maxWwidth: "540px" }}>
                <div class="row g-0">
                    <div class="col-md-4 cart-item-image text-center">
                        <Link to={`/productdetails/${id}`}>
                            <img
                                src={image}
                                class="img-fluid rounded-start resize"
                                alt="image"
                            />
                        </Link>
                    </div>
                    <div class="col-md-8 cart-item-txt greyish-back">
                        <div class="card-body">
                            <Link to={`/productdetails/${id}`}>
                                <h4 class="card-title products-title">{title}</h4>
                            </Link>
                            <p class="card-text cart-desc">
                                <span className="products-title">Description: </span>
                                {description}
                            </p>
                            <p className="try">
                                {<RatingStars rating={rating.rate} />}
                                <span className="rating">
                                    <p className="rating-text">({rating.count})</p>
                                </span>
                            </p>
                            <div class="card-text price-div"> 
                                <div className="dollar">&#36;&nbsp;</div>
                                <div className="price">{dollars}</div>
                                <div className="cents">{cents !== 0 ? cents : "00"}</div>
                            </div>
                            <div className="quantity-div mb-4 align-middle">
                                <span className="plus-sign">
                                    <button className="plus-btn" onClick={onIncreaseHandler}>
                                        <BsPlusCircle />
                                    </button>
                                </span>
                                <span className="quantity-cart">{quantity}</span>
                                <span className="minus-sign">
                                    <button className="minus-btn" onClick={onDecreaseHandler}>
                                        <BsDashCircle />
                                    </button>
                                </span>
                            </div>
                            <button onClick={onRemovehandler} className="btn btn-primary">
                                Remove From Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
