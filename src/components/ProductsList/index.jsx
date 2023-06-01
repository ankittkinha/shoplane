import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Product from '../Product';
import Endpoints from "../../api/Endpoints";

export default function ProductsList() {

    const [products, setProducts] = useState([])

    const getData = () => {
        axios.get(Endpoints.PRODUCTS_URL)
            .then(res => setProducts(res.data))
            .catch(error => console.log(error))
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className="row">
            {
                products.map((product => <Product key={product.id} data={product}/>))
            }
        </div>
    )
}
