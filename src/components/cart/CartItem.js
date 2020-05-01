import React from 'react';

const CartItem = () => {
  return (
    <tr>
      <td className="product d-flex">
        <div className="product-img">
          <img src="assets/images/product-1.jpg" alt="product" />
        </div>
        <div className="product-content media-body">
          <h4 className="product-title">Black Beanie Skate Girl</h4>
          <p className="text">Lorem ipsum dolor sit amet, consectetur adipisicing Commodo...</p>
        </div>
      </td>
      <td className="price">
        <div className="product-Price">
          <span>$190.00 <del>$280.00</del></span>
        </div>
      </td>
      <td className="quantity">
        <div className="product-quantity d-flex justify-content-center" id="quantity">
          <button type="button" id="sub" className="sub">-</button>
          <input type="text" id="1" />
          <button type="button" id="add" className="add">+</button>
        </div>
      </td>
      <td className="total">
        <div className="product-Price">
          <span>$190.00</span>
        </div>
      </td>
      <td className="remove">
        <div className="product-remove">
          <a href="www.google.com"><i className="lni lni-close"></i></a>
        </div>
      </td>
    </tr>
  )
}
export default CartItem;