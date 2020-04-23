import React, { useState, useEffect } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import 'font-awesome/css/font-awesome.min.css';

import img1 from '../assets/img/products/img-01.jpg';

const Header = (props) => {
  const [sideBar, setSidebar] = useState(false);

  useEffect(() => {
  }, [sideBar]);

  const toggleSideBar = () => {
    setSidebar(oldValue => !oldValue)
  }

  return (
    <div>
      <button onClick={toggleSideBar}>Side</button>

      {sideBar && (<List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>)}

      {/* Header Section Start */}
      <div className="header">

        {/* Start Top Bar */}
        <div className="top-bar">
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-sm-2">
              </div>
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
            </div>
          </div>
        </div>
        {/* End Top Bar */}

        {/* Start  Logo & Naviagtion  */}
        <nav className="navbar navbar-default" data-spy="affix" data-offset-top="50">
          <div className="container">
            <div className="row">
              <div className="navbar-header">
                {/* Stat Toggle Nav Link For Mobiles */}
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                  <i className="fa fa-bars"></i>
                </button>
                <a className="navbar-brand" href="index.html">
                  <img src="assets/img/logo.png" alt="" />
                </a>
              </div>
              <div className="navbar-collapse collapse">
                {/* Start Navigation List */}
                <ul className="nav navbar-nav navbar-right">
                  <li>
                    <a className="active" href="index.html">Home <span className="caret"></span></a>
                  </li>
                  <li>
                    <a href="about.html">
                      About
                    </a>
                  </li>
                </ul>
                {/* End Navigation List */}
              </div>
            </div>
          </div>
          {/* End Header Logo & Naviagtion */}

          {/* Mobile Menu Start */}
          <ul className="mobile-menu">
            <li>
              <a className="active" href="index.html">
                Home
            </a>
              <ul className="dropdown">
                <li>
                  <a className="active" href="index.html">Home V1</a>
                </li>
                <li>
                  <a href="index-2.html">Home V2</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="about.html">About</a>
            </li>
            <li>
              <a href="/#">Catalog</a>
              <ul className="dropdown menulinks">
                <li className="maga-menu-title">
                  <a href="/#">Men</a>
                </li>
                <li><a href="category.html">Clothing</a></li>
                <li><a href="category.html">Handbags</a></li>
                <li><a href="category.html">Maternity</a></li>
                <li><a href="category.html">Jewelry</a></li>
                <li><a href="category.html">Scarves</a></li>
                <li className="maga-menu-title">
                  <a href="/#">Women</a>
                </li>
                <li><a href="category.html">Handbags</a></li>
                <li><a href="category.html">Jewelry</a></li>
                <li><a href="category.html">Clothing</a></li>
                <li><a href="category.html">Watches</a></li>
                <li><a href="category.html">Hats</a></li>
              </ul>
            </li>
            <li>
              <a href="/#">Shop</a>
              <ul className="menulinks">
                <li className="maga-menu-title">
                  <a href="/#">Normal Shop Pages</a>
                </li>
                <li><a href="category.html">Single Category</a></li>
                <li><a href="product-details.html">Product Details</a></li>
                <li><a href="shopping-cart.html">Cart Page</a></li>
                <li><a href="checkout.html">Checkout Page</a></li>
                <li><a href="single-shop.html">Seller's Store</a></li>
                <li><a href="shop-grid.html">Shop Grid Sidebar</a></li>
                <li><a href="shop-list.html">Shop List Sidebar</a></li>
                <li><a href="shop-right-sidebar.html">Shop Right Sidebar</a></li>
                <li><a href="order.html">Order Track</a></li>
                <li className="maga-menu-title">
                  <a href="/#">Multi-vendor Pages</a>
                </li>
                <li><a href="submission.html">Product Submission</a></li>
                <li><a href="single-shop.html">Seller Store Page</a></li>
                <li><a href="edit-profile.html">Seller Account</a></li>
                <li><a href="login.html">Log In</a></li>
                <li><a href="shop.html">Search</a></li>
              </ul>
            </li>
            <li>
              <a href="/#">Pages</a>
              <ul className="dropdown">
                <li>
                  <a href="about.html">About Us</a>
                </li>
                <li>
                  <a href="services.html">Services</a>
                </li>
                <li>
                  <a href="contact.html">Contact Us</a>
                </li>
                <li>
                  <a href="product-details.html">Product Details</a>
                </li>
                <li>
                  <a href="team.html">Team Member</a>
                </li>
                <li>
                  <a href="checkout.html">Checkout</a>
                </li>
                <li>
                  <a href="compare.html">Compare</a>
                </li>
                <li>
                  <a href="shopping-cart.html">Shopping cart</a>
                </li>
                <li>
                  <a href="faq.html">FAQs</a>
                </li>
                <li>
                  <a href="wishlist.html">Wishlist</a>
                </li>
                <li>
                  <a href="404.html">404 Error</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/#">Blog</a>
              <ul className="dropdown">
                <li>
                  <a href="blog.html">Blog Right Sidebar</a>
                </li>
                <li>
                  <a href="blog-left-sidebar.html">Blog Left Sidebar</a>
                </li>
                <li>
                  <a href="blog-full-width.html">Blog Full Width</a>
                </li>
                <li>
                  <a href="blog-details.html">Blog Details</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="contact.html">Contact</a>
            </li>
          </ul>
          {/* Mobile Menu End */}
        </nav>
      </div>
      {/* Header Section End */}

      {/* Shop Collection Section Start */}
      <section id="shop-collection">
        <div className="container">
          <h1 className="section-title">New Arrivals</h1>
          <hr className="lines" />
          <div className="row">
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="shop-product">
                <div className="product-box">
                  <a href="/#"><img src={img1} alt="" /></a>
                  <div className="cart-overlay">
                  </div>
                  <span className="sticker new"><strong>NEW</strong></span>
                  <div className="actions">
                    <div className="add-to-links">
                      <a href="/#" className="btn-cart"><i className="icon-basket"></i></a>
                      <a href="/#" className="btn-wish"><i className="icon-heart"></i></a>
                      <a className="btn-quickview md-trigger" data-modal="modal-3"><i className="icon-eye"></i></a>
                    </div>
                  </div>
                </div>
                <div className="product-info">
                  <h4 className="product-title"><a href="product-details.html">Qui Ratione Volup</a></h4>
                  <div className="align-items">
                    <div className="pull-left">
                      <span className="price">$49.00</span>
                    </div>
                    <div className="pull-right">
                      <div className="reviews-icon">
                        <i className="i-color fa fa-star"></i>
                        <i className="i-color fa fa-star"></i>
                        <i className="i-color fa fa-star"></i>
                        <i className="fa fa-star-o"></i>
                        <i className="fa fa-star-o"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="shop-product">
                <div className="product-box">
                  <a href="/#"><img src="assets/img/products/img-02.jpg" alt="" /></a>
                  <div className="cart-overlay">
                  </div>
                  <span className="sticker discount"><strong>-40%</strong></span>
                  <div className="actions">
                    <div className="add-to-links">
                      <a href="/#" className="btn-cart"><i className="icon-basket"></i></a>
                      <a href="/#" className="btn-wish"><i className="icon-heart"></i></a>
                      <span className="btn-quickview md-trigger" data-modal="modal-3"><i className="icon-eye"></i></span>
                    </div>
                  </div>
                </div>
                <div className="product-info">
                  <h4 className="product-title"><a href="product-details.html">Eius Modi Tempo</a></h4>
                  <div className="align-items">
                    <div className="pull-left">
                      <span className="price">$59.00</span>
                    </div>
                    <div className="pull-right">
                      <div className="reviews-icon">
                        <i className="i-color fa fa-star"></i>
                        <i className="i-color fa fa-star"></i>
                        <i className="i-color fa fa-star"></i>
                        <i className="i-color fa fa-star"></i>
                        <i className="fa fa-star-o"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="shop-product">
                <div className="product-box">
                  <a href="/#"><img src="assets/img/products/img-03.jpg" alt="" /></a>
                  <div className="cart-overlay">
                  </div>
                  <div className="actions">
                    <div className="add-to-links">
                      <a href="/#" className="btn-cart"><i className="icon-basket"></i></a>
                      <a href="/#" className="btn-wish"><i className="icon-heart"></i></a>
                      <span className="btn-quickview md-trigger" data-modal="modal-3"><i className="icon-eye"></i></span>
                    </div>
                  </div>
                </div>
                <div className="product-info">
                  <h4 className="product-title"><a href="product-details.html">Quia Voluptas Sit</a></h4>
                  <div className="align-items">
                    <div className="pull-left">
                      <span className="price">$69.00 <del>$79.00</del></span>
                    </div>
                    <div className="pull-right">
                      <div className="reviews-icon">
                        <i className="i-color fa fa-star"></i>
                        <i className="i-color fa fa-star"></i>
                        <i className="i-color fa fa-star"></i>
                        <i className="fa fa-star-o"></i>
                        <i className="fa fa-star-o"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="shop-product">
                <div className="product-box">
                  <a href="/#"><img src="assets/img/products/img-04.jpg" alt="" /></a>
                  <div className="cart-overlay">
                  </div>
                  <span className="sticker sale"><strong>Sale</strong></span>
                  <div className="actions">
                    <div className="add-to-links">
                      <a href="/#" className="btn-cart"><i className="icon-basket"></i></a>
                      <a href="/#" className="btn-wish"><i className="icon-heart"></i></a>
                      <span className="btn-quickview md-trigger" data-modal="modal-3"><i className="icon-eye"></i></span>
                    </div>
                  </div>
                </div>
                <div className="product-info">
                  <h4 className="product-title"><a href="product-details.html">An Tium Lores Eos</a></h4>
                  <div className="align-items">
                    <div className="pull-left">
                      <span className="price">$39.00</span>
                    </div>
                    <div className="pull-right">
                      <div className="reviews-icon">
                        <i className="i-color fa fa-star"></i>
                        <i className="i-color fa fa-star"></i>
                        <i className="fa fa-star-o"></i>
                        <i className="fa fa-star-o"></i>
                        <i className="fa fa-star-o"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="shop-product">
                <div className="product-box">
                  <a href="/#"><img src="/src/assets/img/products/img-05.jpg" alt="" /></a>
                  <div className="cart-overlay">
                  </div>
                  <span className="sticker sale"><strong>Sale</strong></span>
                  <div className="actions">
                    <div className="add-to-links">
                      <a href="/#" className="btn-cart"><i className="icon-basket"></i></a>
                      <a href="/#" className="btn-wish"><i className="icon-heart"></i></a>
                      <a className="btn-quickview md-trigger" data-modal="modal-3"><i className="icon-eye"></i></a>
                    </div>
                  </div>
                </div>
                <div className="product-info">
                  <h4 className="product-title"><a href="product-details.html">Magni Dolores Eos</a></h4>
                  <div className="align-items">
                    <div className="pull-left">
                      <span className="price">$69.00</span>
                    </div>
                    <div className="pull-right">
                      <div className="reviews-icon">
                        <i className="i-color fa fa-star"></i>
                        <i className="i-color fa fa-star"></i>
                        <i className="i-color fa fa-star"></i>
                        <i className="fa fa-star-o"></i>
                        <i className="fa fa-star-o"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="shop-product">
                <div className="product-box">
                  <a href="/#"><img src="assets/img/products/img-06.jpg" alt="" /></a>
                  <div className="cart-overlay">
                  </div>
                  <div className="actions">
                    <div className="add-to-links">
                      <a href="/#" className="btn-cart"><i className="icon-basket"></i></a>
                      <a href="/#" className="btn-wish"><i className="icon-heart"></i></a>
                      <a className="btn-quickview md-trigger" data-modal="modal-3"><i className="icon-eye"></i></a>
                    </div>
                  </div>
                </div>
                <div className="product-info">
                  <h4 className="product-title"><a href="product-details.html">Natur Aut Odit Aut</a></h4>
                  <div className="align-items">
                    <div className="pull-left">
                      <span className="price">$39.00 <del>$79.00</del></span>
                    </div>
                    <div className="pull-right">
                      <div className="reviews-icon">
                        <i className="i-color fa fa-star"></i>
                        <i className="i-color fa fa-star"></i>
                        <i className="i-color fa fa-star"></i>
                        <i className="i-color fa fa-star"></i>
                        <i className="fa fa-star-o"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="shop-product">
                <div className="product-box">
                  <a href="/#"><img src="assets/img/products/img-07.jpg" alt="" /></a>
                  <div className="cart-overlay">
                  </div>
                  <span className="sticker new"><strong>NEW</strong></span>
                  <div className="actions">
                    <div className="add-to-links">
                      <a href="/#" className="btn-cart"><i className="icon-basket"></i></a>
                      <a href="/#" className="btn-wish"><i className="icon-heart"></i></a>
                      <a className="btn-quickview md-trigger" data-modal="modal-3"><i className="icon-eye"></i></a>
                    </div>
                  </div>
                </div>
                <div className="product-info">
                  <h4 className="product-title"><a href="product-details.html">Nisi Ut Aliqu</a></h4>
                  <div className="align-items">
                    <div className="pull-left">
                      <span className="price">$56.00</span>
                    </div>
                    <div className="pull-right">
                      <div className="reviews-icon">
                        <i className="i-color fa fa-star"></i>
                        <i className="i-color fa fa-star"></i>
                        <i className="fa fa-star-o"></i>
                        <i className="fa fa-star-o"></i>
                        <i className="fa fa-star-o"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="shop-product">
                <div className="product-box">
                  <a href="/#"><img src="assets/img/products/img-08.jpg" alt="" /></a>
                  <div className="cart-overlay">
                  </div>
                  <div className="actions">
                    <div className="add-to-links">
                      <a href="/#" className="btn-cart"><i className="icon-basket"></i></a>
                      <a href="/#" className="btn-wish"><i className="icon-heart"></i></a>
                      <a className="btn-quickview md-trigger" data-modal="modal-3"><i className="icon-eye"></i></a>
                    </div>
                  </div>
                </div>
                <div className="product-info">
                  <h4 className="product-title"><a href="product-details.html">Beatae Vitae Dicta</a></h4>
                  <div className="align-items">
                    <div className="pull-left">
                      <span className="price">$79.00</span>
                    </div>
                    <div className="pull-right">
                      <div className="reviews-icon">
                        <i className="i-color fa fa-star"></i>
                        <i className="i-color fa fa-star"></i>
                        <i className="i-color fa fa-star"></i>
                        <i className="fa fa-star-o"></i>
                        <i className="fa fa-star-o"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Shop Collection Section End */}

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


      {/* Start Loader */}
      {/* <div id="loader">
        <div className="sk-folding-cube">
          <div className="sk-cube1 sk-cube"></div>
          <div className="sk-cube2 sk-cube"></div>
          <div className="sk-cube4 sk-cube"></div>
          <div className="sk-cube3 sk-cube"></div>
        </div>
      </div> */}
    </div>
  )
}


export default Header;