import React, { useState } from "react";
import { getAllOffers } from "./offersData";
import OfferCard from "./OfferCard";

const Offers = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  let items = getAllOffers();

  if (category !== "All") items = items.filter((i) => i.category === category);
  items = items.filter((i) => i.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="offers-page">
      <h2 className="offers-page-title">Today's Best Deals</h2>

      <div className="offers-filters">
        <input placeholder="Search offers..." value={search} onChange={(e) => setSearch(e.target.value)} />

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option>All</option>
          <option value="seeds">Seeds</option>
          <option value="fertilizers">Fertilizers</option>
          <option value="machinery">Machinery</option>
        </select>
      </div>

      <div className="offers-grid">
        {items.map((item) => (
          <OfferCard key={item.id} item={item} />
        ))}
      </div>

      <style>{`
        .offers-page { max-width:1300px;margin:auto;padding:40px 20px; }
        .offers-page-title { text-align:center;font-size:28px;font-weight:700;color:#2a7a0e;margin-bottom:25px; }

        .offers-filters { display:flex;gap:12px;justify-content:center;margin-bottom:25px; }
        .offers-filters input, .offers-filters select {
          padding:10px 14px;border:1px solid #ccc;border-radius:6px;font-size:15px;
        }

        .offers-grid {
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(180px,1fr));
          gap:20px;
        }
      `}</style>
    </div>
  );
};

export default Offers;
