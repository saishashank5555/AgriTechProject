import React, { useState, useEffect } from "react";

const ProductFilters = ({ categories = [], selected, onChange, onSearch }) => {
  const [q, setQ] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      onSearch && onSearch(q);
    }, 300);
    return () => clearTimeout(handler);
  }, [q, onSearch]);

  return (
    <div className="filters">
      <select value={selected} onChange={(e) => onChange(e.target.value)}>
        {categories.map(c => <option key={c} value={c}>{c}</option>)}
      </select>

      <input
        placeholder="Search products..."
        value={q}
        onChange={(e) => setQ(e.target.value)}
      />
    </div>
  );
};

export default ProductFilters;
