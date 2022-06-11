import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    
    // console.log(props.product)
    // const { name, price, ratings}=props.Product;
    return (
        <div className='product'>
            <img src={props.product.img} alt="" />
            <div className="product-info">
                <p className='product-name'>{props.product.name}</p>
                <p>Price: ${props.product.price}</p>
                <p><small>Manufacturer: {props.product.seller}</small> </p>
                <p><small>Ratings: {props.product.ratings} stars</small> </p>
            </div>
            <button  onClick={()=>props.handleAddToCart(props.product)} className='btn-cart'>
                <p>Add To Cart</p>  
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </button>
        </div>
    );
};

export default Product;