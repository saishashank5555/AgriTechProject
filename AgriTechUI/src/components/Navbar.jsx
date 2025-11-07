import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Left Section - Logo */}
      <div className="navbar__logo">
        <Link to="/">
          <img
            src="https://www.shutterstock.com/image-vector/agri-tech-leaf-logo-design-600nw-2388734381.jpg"
            alt="AgriTechPro"
          />
          <span>AgriTechPro</span>
        </Link>
      </div>

      {/* Center Section - Search bar */}
      <div className="navbar__search">
        <input type="text" placeholder="Search for seeds, fertilizers, tools..." />
        <button className="search-btn">Search</button>
      </div>

      {/* Mobile Toggle */}
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      {/* Right Section - Links */}
      <div className={`navbar__links ${menuOpen ? "active" : ""}`}>
        <div
          className="dropdown"
          onMouseEnter={() => window.innerWidth > 768 && setDropdownOpen(true)}
          onMouseLeave={() => window.innerWidth > 768 && setDropdownOpen(false)}
          onClick={() => window.innerWidth <= 768 && setDropdownOpen(!dropdownOpen)}
        >
          <span className="dropdown-toggle">
            Categories <span className="arrow">▾</span>
          </span>
          {dropdownOpen && (
            <ul className="dropdown-menu">
              <li><Link to="/products/seeds">Seeds</Link></li>
              <li><Link to="/products/fertilizers">Fertilizers</Link></li>
              <li><Link to="/products/pesticides">Pesticides</Link></li>
              <li><Link to="/products/tools">Tools</Link></li>
              <li><Link to="/products/equipment">Equipment</Link></li>
            </ul>
          )}
        </div>

        <Link to="/services">Services</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login" className="btn-login">Login</Link>
      </div>

      {/* Internal CSS */}
      <style jsx>{`
        .navbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #ffffff;
          padding: 0.7rem 1.5rem;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
          position: sticky;
          top: 0;
          z-index: 100;
          flex-wrap: wrap;
        }

        /* Logo Section */
        .navbar__logo a {
          display: flex;
          align-items: center;
          text-decoration: none;
          color: #2a7a0e;
          font-weight: bold;
          font-size: 1.4rem;
        }

        .navbar__logo img {
          height: 42px;
          margin-right: 10px;
          border-radius: 6px;
        }

        /* Search Section */
        .navbar__search {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f6f8f5;
          border-radius: 25px;
          padding: 0.3rem 0.5rem;
          max-width: 450px;
          margin: 0 1rem;
        }

        .navbar__search input {
          flex: 1;
          border: none;
          background: transparent;
          font-size: 0.95rem;
          color: #333;
          outline: none;
          padding: 0.4rem 0.8rem;
        }

        .search-btn {
          background: #2a7a0e;
          color: #fff;
          border: none;
          border-radius: 25px;
          padding: 0.4rem 1rem;
          cursor: pointer;
          font-weight: 500;
          transition: background 0.3s ease;
          white-space: nowrap;
        }

        .search-btn:hover {
          background: white;
          color: green;
        }

        /* Nav Links */
        .navbar__links {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          transition: all 0.3s ease;
        }

        .navbar__links a {
          text-decoration: none;
          color: #333;
          font-size: 1rem;
          font-weight: 500;
        }

        .navbar__links a:hover {
          color: #333;
          cursor: pointer;
        }

        /* Dropdown */
        .dropdown {
          position: relative;
          cursor: pointer;
        }

        .dropdown-toggle {
          display: flex;
          align-items: center;
          color: #333;
          font-size: 1rem;
        }

        .arrow {
          margin-left: 5px;
          font-size: 0.9rem;
          transition: transform 0.3s ease;
        }

        .dropdown:hover .arrow {
          transform: rotate(180deg);
        }

        .dropdown-menu {
          position: absolute;
          top: 35px;
          left: 0;
          background: #fff;
          border-radius: 6px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          padding: 0.5rem 0;
          list-style: none;
          min-width: 180px;
          z-index: 50;
          animation: fadeIn 0.2s ease;
        }

        .dropdown-menu li {
          padding: 0.5rem 1rem;
        }

        .dropdown-menu li a {
          color: #333;
          display: block;
          text-decoration: none;
        }

        .dropdown-menu li:hover {
          background: #f3f3f3;
        }

        /* Login Button */
        .btn-login {
          border: 1px solid #2a7a0e;
          padding: 0.4rem 0.9rem;
          border-radius: 5px;
          transition: all 0.3s ease;
        }

        .btn-login:hover {
          background: white;
          color: black;
          pointer: cursor;
        }

        /* Menu Toggle */
        .menu-toggle {
          display: none;
          font-size: 1.8rem;
          cursor: pointer;
          color: #2a7a0e;
        }

        /* Responsive Layouts */

        /* Tablet */
        @media (max-width: 1024px) {
          .navbar__search {
            max-width: 300px;
            margin: 0 0.5rem;
          }
        }

        /* Mobile - keeps logo, search, and toggle in one row */
        @media (max-width: 768px) {
          .navbar {
            flex-wrap: wrap;
            padding: 0.8rem;
          }

          .navbar__logo {
            flex: 0 0 auto;
          }

          .navbar__search {
            flex: 1;
            max-width: unset;
            margin: 0 0.5rem;
          }

          .menu-toggle {
            display: block;
            flex: 0 0 auto;
            margin-left: auto;
          }

          .navbar__links {
            display: none;
            flex-direction: column;
            width: 100%;
            background: #fff;
            padding: 1rem 0;
            border-top: 1px solid #eee;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
          }

          .navbar__links.active {
            display: flex;
            animation: fadeIn 0.3s ease;
          }

          .navbar__links a {
            text-align: center;
            padding: 0.6rem 0;
          }

          .dropdown-menu {
            position: static;
            background: #f8f8f8;
            box-shadow: none;
            border-radius: 5px;
            margin-top: 0.5rem;
          }

          .dropdown-menu li {
            text-align: center;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-5px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
