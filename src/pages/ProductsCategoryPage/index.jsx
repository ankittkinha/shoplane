import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Product from '../../components/Product';
import Endpoints from "../../api/Endpoints";
import { useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar';

export default function ProductsCategoryPage() {

    const { category } = useParams();
    const [products, setProducts] = useState([]);

    const getData = () => {
        axios.get(Endpoints.PRODUCTS_BY_CATEGORY_URL + category)
            .then(res => setProducts(res.data))
            .catch(error => console.log(error))
    }

    useEffect(() => {
        getData();
    }, [category])

    return (
        <div>
            <div className="row">
                {
                    products.map((product => <Product key={product.id} data={product} />))
                }
            </div>
        </div>

    )
}