import React, {useState, useEffect} from 'react';
import '../assets/css/sidebar.css';

export const Sidebar = () => {
  const [sideBar, setSidebar] = useState(false);

  useEffect(() => {
  }, [sideBar]);

  const toggleSideBar = () => {
    setSidebar(oldValue => {
      return !oldValue;
    });
  }

  return (
    <>
      <button type="button" id="sidebarCollapse" className={`navbar-btn ${sideBar ? '': 'active'}`}
        onClick={toggleSideBar}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <button className="btn btn-dark d-inline-block d-lg-none ml-auto"
        type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i className="fas fa-align-justify"></i>
      </button>
      {(
        <nav id="sidebar" className={`navbar-btn ${sideBar ? '': 'active'}`}>
          <div className="sidebar-header">
            <h3>Mapajoying</h3>
          </div>

          <ul className="list-unstyled components">
            <p>Need Help?</p>
            <li className="active">
              <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Home</a>
              <ul className="collapse list-unstyled" id="homeSubmenu">
                <li>
                  <a href="https://google.com">Home 1</a>
                </li>
                <li>
                  <a href="https://google.com">Home 2</a>
                </li>
                <li>
                  <a href="https://google.com">Home 3</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="https://google.com">About</a>
              <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Pages</a>
              <ul className="collapse list-unstyled" id="pageSubmenu">
                <li>
                  <a href="https://google.com">Page 1</a>
                </li>
                <li>
                  <a href="https://google.com">Page 2</a>
                </li>
                <li>
                  <a href="https://google.com">Page 3</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="https://google.com">Portfolio</a>
            </li>
            <li>
              <a href="https://google.com">Contact</a>
            </li>
          </ul>

          <ul className="list-unstyled CTAs">
            <li>
              <a href="https://google.com" className="download">Go to Google</a>
            </li>
            <li>
              <a href="https://google.com" className="article">Back</a>
            </li>
          </ul>
        </nav>
      )}
    </>

  )
}