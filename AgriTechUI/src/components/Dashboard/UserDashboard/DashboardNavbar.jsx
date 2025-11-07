import React, { useContext, useState } from "react";
import { CartContext } from "./CartContext";

const DashboardNavbar = ({ onSearch }) => {
  const { cart } = useContext(CartContext);
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    setQuery(e.target.value);
    if (onSearch) onSearch(e.target.value);
  };

  return (
    <header className="ud-navbar">
      <div className="ud-brand">🌿 AgriTechPro</div>

      <div className="ud-search">
        <input
          value={query}
          onChange={handleSearch}
          placeholder="Search seeds, fertilizers, tools..."
        />
      </div>

      <div className="ud-actions">
        <div className="ud-action">❤ Wishlist</div>
        <div className="ud-action">🛒 Cart ({cart.length})</div>
      </div>
    </header>
  );
};

export default DashboardNavbar;
