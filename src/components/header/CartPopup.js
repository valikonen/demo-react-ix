import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import CartEntry from './CartEntry';
import {getCartItems} from '../../redux/cart/cartActions';
import { connect } from 'react-redux';

const CartPopup = ({ cartItems, getCartItems }) => {

  useEffect(() => {
    getCartItems();
  }, [getCartItems]);
  
  return (
    <>
      <div className="col-md-8 col-sm-10">
        <div className="shop-cart">
          <ul>
            <li><a className="cart-icon cart-btn" href="wishlist.html"><span className="icon-heart"></span></a></li>
            <li>
              <a href="/#" className="cart-icon cart-btn"><i className="icon-basket"></i><span className="cart-label">3</span></a>
              <div className="cart-box">
                <div className="popup-container">
                  ({cartItems ? cartItems : ''})
                  <CartEntry />
                  <div className="summary">
                    <div className="subtotal">Sub Total</div>
                    <div className="price-s">$210.5</div>
                  </div>
                  <div className="cart-buttons">
                    <Link to="/cart"
                      className="btn btn-border-2">
                      View Cart
                    </Link>
                    <a href="/#" className="btn btn-common">Checkout</a>
                    <div className="clear"></div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
const mapStateToProp = state => {
  return {
    cartItems: state.cartItems
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCartItems: () => dispatch(getCartItems())
  }
}

export default connect(mapStateToProp, mapDispatchToProps)(CartPopup);
