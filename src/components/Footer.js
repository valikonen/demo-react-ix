import React from 'react';

const Footer = () => {
    return (
        <>
            {/* Footer Start */}
            <footer className="section">
                <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                    <div className="contact-us">
                        <h3 className="widget-title">Contact Us</h3>
                        <ul className="contact-list">
                        <li><i className="icon-home"></i> <span>888 6th 10001 Oakwood Avenue, New York City, NY</span></li>
                        <li><i className="icon-call-out"></i> <span>212-631-5135 <br /> 212-631-5105</span></li>
                        <li><i className="icon-envelope"></i> <span>sales@emart.com  support@emart.com</span></li>
                        </ul>
                    </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                    <h3 className="widget-title">Useful Links</h3>
                    <ul>
                        <li><a href="login.html">My Account</a></li>
                        <li><a href="contact.html">Contact</a></li>
                        <li><a href="checkout.html">Checkout</a></li>
                        <li><a href="404.html">404 Page</a></li>
                        <li><a href="wishlist.html">Wishlist</a></li>
                        <li><a href="compare.html">Compare</a></li>
                    </ul>
                    </div>
                    <div className="col-md-3 col-sm-6">
                    <h3 className="widget-title">Product Tags</h3>
                    <div className="tagcloud">
                        <a href="/#" className="tag-link">Accessories</a>
                        <a href="/#" className="tag-link">Bags</a>
                        <a href="/#" className="tag-link">Bestseller</a>
                        <a href="/#" className="tag-link">Handpicked</a>
                        <a href="/#" className="tag-link">Dresses</a>
                        <a href="/#" className="tag-link">Men Fashion</a>
                        <a href="/#" className="tag-link">Sell Off</a>
                        <a href="/#" className="tag-link">Shoes</a>
                        <a href="/#" className="tag-link">Specials</a>
                        <a href="/#" className="tag-link">Tops</a>
                        <a href="/#" className="tag-link">Women Fashion</a>
                    </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                    <div className="block-subscribe">
                        <h3 className="widget-title">Newsletter</h3>
                        <p>Quisque a nunc interdum tellus placerat cursus. Quisque facilisis dapibus facilisis! Vivamus dictum lectus ut porta volutpat.</p>
                        <form className="subscribe" >
                        <input type="text" className="form-control" name="email" placeholder="Enter Email" />
                        <button type="submit" className="btn btn-common">Subscribe</button>
                        </form>
                    </div>
                    </div>
                </div>
                </div>
            </footer>
            {/* Footer End */}

            {/* Copyright Start */}
            <div id="copyright">
                <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-6 col-xs-12">
                    <p>All copyrights reserved &copy; 2017 - Designed & Developed by <a rel="nofollow" href="https://uideck.com">UIdeck</a></p>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12">
                    <div className="payment pull-right">
                        <img src="assets/img/payment.png" alt="" />
                    </div>
                    </div>
                </div>
                </div>
            </div>
            {/* Copyright End */}

            {/* Go To Top Link */}
            <a href="/#" className="back-to-top">
                <i className="icon-arrow-up"></i>
            </a>
        </>
    );
}

export default Footer;
