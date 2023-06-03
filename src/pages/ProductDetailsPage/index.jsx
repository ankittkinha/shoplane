import React, { useEffect, useState } from "react";
import Endpoints from "../../api/Endpoints";
import axios from "axios";
import Navbar from "../../components/Navbar";
import RatingStars from "../../components/RatingStars";
import cartImg from "../../images/cart-white.png";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import redHeartImg from "../../images/heart-992.svg";
import emptyHeartImg from "../../images/heart-3510.svg";
import { addToCart } from "../../redux/reducers/cart-reducer";
import { addToFavorites, removeFromFavorites } from "../../redux/reducers/favorites-reducer";

export default function ProductDetailspage() {
    const fav = useSelector((state) => state.favorites.favorites);
    const dispatch = useDispatch();
    const [product, setProduct] = useState({});
    const { id } = useParams();
    const [favorite, setFavorite] = useState(false);

    const checkFavorites = () => {
        fav.forEach((item) => {
            if (item.id == id) {
                setFavorite(true);
            }
        });
    };

    useEffect(() => {
        checkFavorites();
    }, [fav]);

    const getData = () => {
        axios
            .get(Endpoints.PRODUCTS_URL + id)
            .then((res) => setProduct(res.data))
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        getData();
    }, [id]);

    let price = product.price;
    let dollars = Math.floor(price);
    let cents;

    if (price) {
        cents = (price.toFixed(2) - dollars).toFixed(2) * 100;
    }

    const onClickHandler = () => {
        dispatch(addToCart(product));
    };

    const wishlistClickhandler = () => {
        if (!favorite) {
            dispatch(addToFavorites(product));
            setFavorite(true);
        } else {
            dispatch(removeFromFavorites(parseInt(id)));
            setFavorite(false);
        }
    };

    return (
        <div>
            <Navbar />
            <div className="wrapper">
                <div className="card mb-3" style={{ maxWidth: "60%" }}>
                    <div className="row g-0 inner-body">
                        <div className="col-md-4 text-center my-auto details-img">
                            <button
                                className="wishlist-btn-prdetails"
                                onClick={wishlistClickhandler}
                            >
                                {favorite ? (
                                    <img
                                        src={redHeartImg}
                                        alt="image"
                                        height="20px"
                                        width="20px"
                                    />
                                ) : (
                                    <img
                                        src={emptyHeartImg}
                                        alt="image"
                                        height="20px"
                                        width="20px"
                                    />
                                )}
                            </button>
                            <img
                                src={product.image}
                                className="img-fluid rounded-start"
                                alt="image"
                            />
                        </div>
                        <div className="col-md-8 text-part details-txt greyish-back">
                            <div className="card-body">
                                <p
                                    className="card-title products-title"
                                    style={{ fontSize: "1.5em" }}
                                >
                                    {product.title}
                                </p>
                                <p>
                                    <span className="products-title">Description: </span>
                                    {product.description}
                                </p>
                                <p className="try">
                                    {product.rating && (
                                        <RatingStars rating={product.rating.rate} />
                                    )}
                                    <span className="rating">
                                        <p className="rating-text">
                                            ({product.rating && product.rating.count})
                                        </p>
                                    </span>
                                </p>
                                <div className="card-text price-div">
                                    {" "}
                                    <div className="dollar">&#36;&nbsp;</div>{" "}
                                    <div className="price">{dollars}</div>{" "}
                                    <div className="cents">{cents !== 0 ? cents : "00"}</div>
                                </div>
                                <div className="d-grid gap-2">
                                    <button
                                        onClick={onClickHandler}
                                        className="btn btn-primary btn-block"
                                    >
                                        <img src={cartImg} className="cart-img" alt="image" />
                                        Add To Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
