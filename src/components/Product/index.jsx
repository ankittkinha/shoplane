import React, { useEffect, useState } from "react";
import cartImg from "../../images/cart-white.png";
import RatingStars from "../RatingStars";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/actions/cart-actions";
import { addToFavorites, removeFromFavorites } from "../../redux/actions/fav-actions";
import redHeartImg from "../../images/heart-992.svg";
import emptyHeartImg from "../../images/heart-3510.svg";

export default function Product(props) {
    const fav = useSelector((state) => state.favorites.favorites);
    const dispatch = useDispatch();
    const { title, price, rating, image, id } = props.data;
    let dollars = Math.floor(price);
    let cents = (price.toFixed(2) - dollars).toFixed(2) * 100;
    const [favorite, setFavorite] = useState(false)

    // console.log("name: " + title)
    // console.log("id:" + id)
    // console.log("favorite:" + favorite)
    // console.log("fav: " + fav[0])
    // console.log("favArrIDs: " + fav.map(item => item.id))
    // console.log("propsData: " + props.data.price)
    console.log(title + " got changed")
    console.log("isfavorite: " + favorite)

    const checkFavorites = () => {
        fav.forEach((item) => {
            if (item.id === props.key) {
                setFavorite(true)
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
        <div class="col-sm-3 mb-3 sm-0">
            <div class="card">
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

                <div class="card-body greyish-back">
                    <p class="card-title long-title">
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
                    <div class="card-text price-div">
                        <div className="dollar">&#36;&nbsp;</div>
                        <div className="price">{dollars}</div>
                        <div className="cents">{cents !== 0 ? cents : "00"}</div>
                    </div>
                    <div className="d-grid gap-2">
                        <button onClick={onClickHandler} class="btn btn-primary btn-block">
                            <img src={cartImg} className="cart-img" alt="image" />
                            Add To Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
