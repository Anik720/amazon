import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
const Product = (props) => {
  const { name, img, seller, price, ratings } = props.product;
  return (
    <div className='product'>
      <img src={img} alt='' />
      <div className='product-info'>
        <h1 className='product-name'>Name: {name}</h1>
        <h1 className='product-name'>Seller: {seller}</h1>
        <h1 className='product-name'>Price: {price}</h1>
        <h1 className='product-name'>
          Ratings:
          {ratings}
        </h1>
      </div>
      <div>
        <button
          className='btn-cart'
          onClick={() => props.addToCartHandler(props.product)}>
          {' '}
          Add to Cart
          <FontAwesomeIcon icon={faShoppingCart} />
        </button>
      </div>
    </div>
  );
};

export default Product;
