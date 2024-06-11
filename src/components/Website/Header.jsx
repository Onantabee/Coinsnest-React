import React from "react";

const Header = () => {
  return (
    <nav className="navbar navbar-light bg-white py-3 navbar-expand-lg sticky-top">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-
          toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse"  id="navbarTogglerDemo01">
          <a className="navbar-brand" href="#">
            CoinsNest
          </a>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item me-4">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item me-4">
              <a className="nav-link" href="#">
                Markets
              </a>
            </li>
            <li className="nav-item me-4">
              <a className="nav-link" href="#">
                Exchange
              </a>
            </li>
            <li className="nav-item me-4">
              <a className="nav-link" href="#">
                News
              </a>
            </li>
            <li className="nav-item me-4">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <a href=""className="btn btn-primary ms-4">Language</a>            
          </ul>

        </div>
      </div>
    </nav>
  );
};

export default Header;