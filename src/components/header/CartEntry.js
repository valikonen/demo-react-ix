import React from 'react';

const CartEntry = (title, stock, price) => {
  return (
    <div className="cart-entry">
      <a href="/#" className="image">
        <img src="assets/img/products/product-menu-1.jpg" alt="" />
      </a>
      <div className="content">
        <a href="/#" className="title">{title}</a>
        <p className="quantity">{stock}</p>
        <span className="price">${price}</span>
      </div>
      <div className="button-x">
        <i className="icon-close"></i>
      </div>
    </div>

  )
}

export default CartEntry;