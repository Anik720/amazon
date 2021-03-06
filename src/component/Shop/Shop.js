import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';
import Cart from './../Cart/Cart';
const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('products.json')
      .then((data) => data.json())
      .then((data) => setProducts(data));
  });
  const addToCartHandler = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };
  return (
    <div className='container'>
      <div className='products-container'>
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            addToCartHandler={addToCartHandler}></Product>
        ))}
      </div>
      <div className='cart-container'>
        <Cart cart={cart}> </Cart>
      </div>
    </div>
  );
};

export default Shop;
