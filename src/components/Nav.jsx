import React from "react";
import "../Assets/Nav.css";

const Nav = ({ onSearchTermChange }) => {
  const handleInputChange = (e) => {
    const newSearchTerm = e.target.value;
    onSearchTermChange(newSearchTerm);
  };

  return (
    <nav className="navbar shadow-sm">
      <div className="container d-flex justify-content-start">
        <a className="navbar-brand" href="">
          <div className="input-group rounded">
            <input
              type="search"
              className="form-control rounded-3 rounded-end-0 border-0"
              placeholder="Search..."
              aria-label="Search"
              aria-describedby="search-addon"
              onChange={handleInputChange}
            />
            <span
              className="input-group-text rounded-end-3 border-0 bg-white"
              id="search-addon"
            >
              <i className="fas fa-search"></i>
            </span>
          </div>
        </a>

        <div className="dropdown show">
          <a
            className="btn dropdown-toggle"
            role="button"
            id="dropdownMenuLink"
          >
            Relevance
          </a>
        </div>
        <div className="dropdown show">
          <a
            className="btn dropdown-toggle"
            role="button"
            id="dropdownMenuLink"
          >
            All Brands
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
