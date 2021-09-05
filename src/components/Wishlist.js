import axios from 'axios';
import React from 'react';
import '../components/Product.css';
import { useState, useEffect ,useRef} from 'react';

export default function Wishlist(props) {
    
    const [products, setProducts] = useState([]);

    const url = 'http://localhost:4200/products'
    console.log(products)

    const getProducts = () => {
        axios.get(url).then((response) => {
            const data = response.data
            setProducts(data)
        }).catch(error => console.error(error));
    }

    useEffect(() =>
        getProducts(), [])

    return (
        <div className="products">
        {/* <h3>All Products</h3> */}
        {products.map(function (data) {
            return <div className="card" key={data._id}>
                <img src={data.image} className="img" />
                <div className="card-body">
                    <h5 className="card-title" >{data.title}</h5>
                    <p className="card-text"  >{data.description}</p>
                    <button 
                    // onClick={() => addToCart(data._id)}
                    onClick={() => 
                        { props.history.push('/products') }}
                    >Remove from Wishlist</button>
                </div>
            </div>
        })}
    </div >
    )
}
