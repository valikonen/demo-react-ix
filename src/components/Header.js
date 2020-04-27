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
                    Home
                  </Link>
                  </li>
                  <Link to="/users">
                    Users
                  </Link>
                  <Link to="/add-product">
                    Add product
                  </Link>
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