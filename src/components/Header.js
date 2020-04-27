import React from 'react';
import { Link } from "react-router-dom";
import Cart from './Cart';




const Header = () => {
  return (
      <div className="header">

        {/* Start Top Bar */}
        <div className="top-bar">
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-sm-2"></div>
              <Cart />
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
                  <Link className="active" to="/">
                    <span className="caret"></span>
                    Home
                  </Link>
                  </li>
                  <Link to="/users">
                    <span className="caret"></span>
                    Users
                  </Link>
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
  )
}


export default Header;