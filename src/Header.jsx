// Header.js
import React from 'react';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import logo from './images/Mercedes-Benz_logo.png';

function Header() {
  return (
    <header id="header" className="fixed-top">
      <div className="header__top">
        <div className="left">
          <img src={logo} alt="Mercedes-Benz Logo" />
          <a className="text__color__white">Mercedes-Benz</a>
        </div>
        <div className="right">
          <form action="" className="search__box">
            <input
              type="text"
              required
              className="search__text"
              placeholder="Nhập từ khóa muốn tìm"
            />
          </form>
        </div>
      </div>
    </header>
  );
}

export default Header;
