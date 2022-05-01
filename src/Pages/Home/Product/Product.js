import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';
const Product = (props) => {
    const { name, img, seller, price, stock } = props.product;
    const handleAddToCart = props.handleAddToCart;
    return (
        <div className='product-container'>
                <div>
                    <img src={img} alt="" />
                </div>
                <div>
                    <h3 className='main-text'>{name}</h3>
                    <p><small>Price: {price}</small></p>
                    <p><small>by: {seller}</small></p>
                    <p><small>Only {stock} left in stock-order soon</small></p>
                    <button onClick={()=>handleAddToCart(props.product)} className='product-button'><FontAwesomeIcon icon={faShoppingCart}/> Buy Now</button>
                </div>
        </div>
    );
};

export default Product;