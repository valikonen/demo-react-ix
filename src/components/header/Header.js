import React, { useState } from 'react';
import { Link } from "react-router-dom";
import CartPopup from './CartPopup';

const Header = () => {
  const [navBarRightItemActive, setNavBarRightItemActive] = useState(() => {
    return { products: false, user: false, addProduct: false }
  });

  const setButtonState = (buttonName) => {
    switch (buttonName) {
      case '':
        setNavBarRightItemActive(() => { return { products: false, user: false, addProduct: false } })
        break;
      case 'products':

        setNavBarRightItemActive(() => { return { products: true, user: false, addProduct: false } })
        break;
      case 'user':
        setNavBarRightItemActive(() => { return { products: false, user: true, addProduct: false } })
        break;
      case 'addProduct':
        setNavBarRightItemActive(() => { return { products: false, user: false, addProduct: true } })
        break;        
      default:
        setNavBarRightItemActive(() => { return { products: false, user: false, addProduct: false } })
    }
  }

  return (
    <div className="header">

      {/* Start Top Bar */}
      <div className="top-bar">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-2"></div>
            <CartPopup />
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
                  <Link
                    className={`${navBarRightItemActive.products ? 'active' : ''}`} to="/"
                    onClick={() => setButtonState('products')}>
                    Products
                  </Link>
                </li>
                <li>
                  <Link to="/user"
                    className={`${navBarRightItemActive.user ? 'active' : ''}`}
                    onClick={() => setButtonState('user')}>
                    Edit User
                  </Link>
                </li>
                <li>
                  <Link to="/add-product"
                    className={`${navBarRightItemActive.addProduct ? 'active' : ''}`}
                    onClick={() => setButtonState('addProduct')}>
                    Add product
                  </Link>
                </li>
              </ul>
              {/* End Navigation List */}
            </div>
          </div>
        </div>
        {/* End Header Logo & Naviagtion */}

      </nav>
    </div>
  )
}


export default Header;