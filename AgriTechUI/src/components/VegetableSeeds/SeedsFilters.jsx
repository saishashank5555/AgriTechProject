import React from "react";

const SeedsFilters = ({
  search,
  setSearch,
  selectedBrands,
  toggleBrand,
  maxPrice,
  setMaxPrice,
  sort,
  setSort,
  brands
}) => {
  return (
    <div className="filters-box">

      <input
        type="text"
        placeholder="Search seeds..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="filter-input"
      />

      <div className="filter-section">
        <h4>Brand</h4>
        {brands.map((b) => (
          <label key={b} className="filter-checkbox">
            <input
              type="checkbox"
              checked={selectedBrands.includes(b)}
              onChange={() => toggleBrand(b)}
            />
            {b}
          </label>
        ))}
      </div>

      <div className="filter-section">
        <h4>Max Price: ₹{maxPrice}</h4>
        <input
          type="range"
          min="50"
          max="500"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="filter-slider"
        />
      </div>

      <div className="filter-section">
        <h4>Sort By</h4>
        <select value={sort} onChange={(e) => setSort(e.target.value)} className="filter-select">
          <option value="popular">Popularity</option>
          <option value="price_low">Price: Low to High</option>
          <option value="price_high">Price: High to Low</option>
          <option value="rating">Rating</option>
        </select>
      </div>

      <style>{`
        .filters-box {
          width: 250px;
          padding: 20px;
          background:#fff;
          border-radius: 10px;
          box-shadow: 0 4px 16px rgba(0,0,0,0.08);
          height: fit-content;
        }
        .filter-input {
          width: 100%;
          padding: 8px;
          border:1px solid #ccc;
          border-radius:6px;
          margin-bottom:20px;
        }
        .filter-section { margin-bottom: 18px; }
        .filter-section h4 { margin-bottom:8px; font-size:15px; color:#333; }
        .filter-checkbox { display:block; font-size:14px; margin-bottom:5px; color:#555; }
        .filter-slider { width:100%; }
        .filter-select { width:100%; padding:6px; border-radius:6px; border:1px solid #ccc; }
        
        @media(max-width:800px){
          .filters-box {
            width:100%;
            margin-bottom:20px;
            display:flex;
            flex-wrap:wrap;
            gap:15px;
          }
          .filter-section { width:48%; }
        }
      `}</style>
    </div>
  );
};

export default SeedsFilters;
