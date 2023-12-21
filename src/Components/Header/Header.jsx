import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";

import "./Header.css";

const Header = ({ setSearch, search }) => {
  return (
    <nav className="nav">
      <div className="logo">
        <img
          src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
          alt="vbvbb"
        />
        <div className="logo-Text">KEEP</div>
      </div>
      <div className="searchBar">
        <span className="searchLogo">
          <IoMdSearch />
        </span>
        <input
          type="text"
          value={search}
          placeholder="Search Note"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="icons"></div>
    </nav>
  );
};

export default Header;
