import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const location = useLocation();
  const menuRef = useRef(null);
  const dropdownRef = useRef(null);

  // Detect Mobile View
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 800);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMenuOpen(false);
    setDropdownOpen(false);
  }, [location]);

  // Close menus on click outside (Mobile only)
  useEffect(() => {
    const handleClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) setMenuOpen(false);
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) setDropdownOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <header className="agri-header">
      <nav className="agri-nav" ref={menuRef}>

        {/* LOGO */}
        <Link to="/" className="agri-logo">
          <img src="https://www.shutterstock.com/image-vector/agri-tech-leaf-logo-design-600nw-2388734381.jpg" alt="logo" />
          AgriTechPro
        </Link>

        {/* SEARCH */}
        <div className="agri-center">
          <div className="agri-search">
            <input type="text" placeholder="Search Seeds, Fertilizers, Tools..." />
            <button>Search</button>
          </div>
        </div>

        {/* LINKS SECTION */}
        <div className={`agri-links ${menuOpen ? "open" : ""}`}>          

          {/* Categories Dropdown */}
          <div
            className="agri-more-area"
            ref={dropdownRef}
            onMouseEnter={() => !isMobile && setDropdownOpen(true)}
            onMouseLeave={() => !isMobile && setDropdownOpen(false)}
          >
            <button className="agri-more-btn" onClick={isMobile ? () => setDropdownOpen(!dropdownOpen) : undefined}>
              Categories <span>{dropdownOpen ? "▲" : "▼"}</span>
            </button>

            {dropdownOpen && (
              <div className="agri-dropdown open">
                <Link to="/products/seeds">Seeds</Link>
                <Link to="/products/fertilizers">Fertilizers</Link>
                <Link to="/products/pesticides">Pesticides</Link>
                <Link to="/products/tools">Tools</Link>
                <Link to="/products/equipment">Equipment</Link>
              </div>
            )}
          </div>

          <Link to="/services">Services</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>

          <Link to="/login" className="agri-login-btn">Login</Link>
        </div>

        {/* HAMBURGER */}
        <button className="agri-hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span><span></span><span></span>
        </button>

      </nav>

      {/* INTERNAL CSS */}
      <style>{`
        :root {
          --green: #2a7a0e;
          --border: #e2e2e2;
          --light: #f6f8f5;
        }
        .agri-header {
          background: #fff;
          border-bottom: 1px solid var(--border);
          position: sticky;
          top: 0;
          z-index: 9999;
        }
        .agri-nav {
          max-width: 1300px;
          margin: auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 24px;
        }
        .agri-logo {
          display: flex;
          align-items: center;
          font-size: 1.6rem;
          font-weight: 700;
          text-decoration: none;
          color: var(--green);
        }
        .agri-logo img {
          height: 42px;
          border-radius: 8px;
          margin-right: 8px;
        }
        .agri-center{ flex:1; display:flex; justify-content:center; }
        .agri-search {
          display:flex;
          background: var(--light);
          border:1px solid var(--border);
          border-radius: 25px;
          overflow:hidden;
          width: 420px;
          max-width:100%;
        }
        .agri-search input { flex:1; border:none; padding:10px; background:transparent; outline:none; }
        .agri-search button {
          background: var(--green);
          border:none;
          padding:10px 18px;
          color:#fff;
          cursor:pointer;
          font-weight:600;
        }
        .agri-links {
          display:flex;
          align-items:center;
          gap:24px;
        }
        .agri-links a { text-decoration:none; color:#333; font-weight:500; }
        .agri-links a:hover { color: var(--green); }
        .agri-more-btn {
          background:none; border:none; cursor:pointer; font-weight:500; color:#333; display:flex; align-items:center; gap:4px;
        }
        .agri-more-area{ position:relative; }
        .agri-dropdown {
          display:flex; flex-direction:column;
          position:absolute; top:40px; background:#fff;
          border:1px solid var(--border); border-radius:8px;
          box-shadow:0 6px 18px rgba(0,0,0,0.1); animation:fadeIn .2s;
        }
        .agri-dropdown a{ padding:10px 18px; }
        .agri-dropdown a:hover{ background:var(--light); color: var(--green); }
        .agri-login-btn{ padding:8px 18px; border:1px solid var(--green); border-radius:6px; }
        .agri-login-btn:hover{ background:var(--green); color:#fff; }
        .agri-hamburger {
          display:none;
          flex-direction:column;
          gap:5px;
          background:none;
          border:none;
          cursor:pointer;
          margin-left:10px;
        }
        .agri-hamburger span{ width:26px; height:3px; background: var(--green); }

        /* MOBILE */
        @media(max-width:800px){
          .agri-center{ display:none; }
          .agri-links{
            display:none;
            flex-direction:column;
            width:100%;
            padding:20px;
            background:#fff;
            border-top:1px solid var(--border);
          }
          .agri-links.open{ display:flex; }
          .agri-dropdown{ position:static; box-shadow:none; border:none; }
          .agri-hamburger{ display:flex; }
        }

        @keyframes fadeIn{ from{opacity:0;} to{opacity:1;} }
      `}</style>
    </header>
  );
}
