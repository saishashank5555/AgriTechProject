import React, { useState } from "react";
import { getAllBestSelling } from "./bestSellingData";
import BestSellingCard from "./BestSellingCard";

const BestSelling = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  let items = getAllBestSelling();

  if (category !== "All") items = items.filter((i) => i.category === category);
  items = items.filter((i) => i.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="bs-page">
      <h2 className="bs-page-title">Best Selling Products</h2>

      <div className="bs-filters">
        <input placeholder="Search products..." value={search} onChange={(e) => setSearch(e.target.value)} />

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option>All</option>
          <option value="seeds">Seeds</option>
          <option value="fertilizers">Fertilizers</option>
          <option value="machinery">Farm Machinery</option>
        </select>
      </div>

      <div className="bs-grid">
        {items.map((item) => (
          <BestSellingCard key={item.id} item={item} />
        ))}
      </div>

      <style>{`
        .bs-page { max-width:1300px;margin:auto;padding:40px 20px; }
        .bs-page-title { text-align:center;font-size:28px;font-weight:700;color:#2a7a0e;margin-bottom:25px; }

        .bs-filters { display:flex;gap:12px;justify-content:center;margin-bottom:25px; }
        .bs-filters input,.bs-filters select {
          padding:10px 14px;border:1px solid #ccc;border-radius:6px;font-size:15px;
        }

        .bs-grid { display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:20px; }
      `}</style>
    </div>
  );
};

export default BestSelling;
