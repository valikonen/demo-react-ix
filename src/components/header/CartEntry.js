import React from 'react';

const CartEntry = () => {
  return (
    <div className="cart-entry">
      <a href="/#" className="image">
        <img src="assets/img/products/product-menu-1.jpg" alt="" />
      </a>
      <div className="content">
        <a href="/#" className="title">Pullover Batwing</a>
        <p className="quantity">Quantity: 3</p>
        <span className="price">$45.00</span>
      </div>
      <div className="button-x">
        <i className="icon-close"></i>
      </div>
    </div>

  )
}

export default CartEntry;