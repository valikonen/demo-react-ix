import React from 'react';

const Cart = () => {
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
                        <div className="cart-entry">
                        <a href="/#" className="image">
                            <img src="assets/img/products/product-menu-2.jpg" alt="" />
                        </a>
                        <div className="content">
                            <a href="/#" className="title">Pullover Batwing</a>
                            <p className="quantity">Quantity: 3</p>
                            <span className="price">$90.00</span>
                        </div>
                        <div className="button-x">
                            <i className="icon-close"></i>
                        </div>
                        </div>
                        <div className="summary">
                        <div className="subtotal">Sub Total</div>
                        <div className="price-s">$210.5</div>
                        </div>
                        <div className="cart-buttons">
                        <a href="/#" className="btn btn-border-2">View Cart</a>
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

export default Cart;
