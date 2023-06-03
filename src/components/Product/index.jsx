import React, { useEffect, useState } from "react";
import cartImg from "../../images/cart-white.png";
import RatingStars from "../RatingStars";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import redHeartImg from "../../images/heart-992.svg";
import emptyHeartImg from "../../images/heart-3510.svg";
import { addToCart } from "../../redux/reducers/cart-reducer";
import { addToFavorites, removeFromFavorites } from "../../redux/reducers/favorites-reducer";

export default function Product(props) {
    const fav = useSelector((state) => state.favorites.favorites);
    const dispatch = useDispatch();
    const { title, price, rating, image, id } = props.data;
    let dollars = Math.floor(price);
    let cents = (price.toFixed(2) - dollars).toFixed(2) * 100;
    const [favorite, setFavorite] = useState(false);

    const checkFavorites = () => {
        fav.forEach((item) => {
            if (item.id === id) {
                setFavorite(true);
            }
        });
    };

    useEffect(() => {
        checkFavorites()
    }, [fav]);

    const onClickHandler = () => {
        dispatch(addToCart(props.data));
    };

    const wishlistClickhandler = () => {
        if (!favorite) {
            dispatch(addToFavorites(props.data))
            setFavorite(true)
        } else {
            dispatch(removeFromFavorites(id))
            setFavorite(false)
        }
    };

    return (
        <div className="col-sm-3 mb-3 sm-0">
            <div className="card">
                <div className="text-center img-div">
                    <button className="wishlist-btn" onClick={wishlistClickhandler}>
                        {favorite ? (
                            <img src={redHeartImg} alt="image" height="20px" width="20px" />
                        ) : (
                            <img src={emptyHeartImg} alt="image" height="20px" width="20px" />
                        )}
                    </button>
                    <Link to={`/productdetails/${id}`}>
                        <img src={image} className="resize" alt="image" />
                    </Link>
                </div>

                <div className="card-body greyish-back">
                    <p className="card-title long-title">
                        <Link to={`/productdetails/${id}`}>
                            <span className="products-title">{title}</span>
                        </Link>
                    </p>
                    <p className="try">
                        {<RatingStars rating={rating.rate} />}
                        <span className="rating">
                            <p className="rating-text">({rating.count})</p>
                        </span>
                    </p>
                    <div className="card-text price-div">
                        <div className="dollar">&#36;&nbsp;</div>
                        <div className="price">{dollars}</div>
                        <div className="cents">{cents !== 0 ? cents : "00"}</div>
                    </div>
                    <div className="d-grid gap-2">
                        <button onClick={onClickHandler} className="btn btn-primary btn-block">
                            <img src={cartImg} className="cart-img" alt="image" />
                            Add To Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
