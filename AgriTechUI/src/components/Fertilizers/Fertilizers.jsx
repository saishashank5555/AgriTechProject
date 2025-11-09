import React, { useState } from "react";
import fertilizersData from "./fertilizersData";
import FertilizerCard from "./FertilizerCard";

const Fertilizers = () => {
  const [search, setSearch] = useState("");
  const [brand, setBrand] = useState("All");
  const [sort, setSort] = useState("default");
  const [page, setPage] = useState(1);

  const itemsPerPage = 12;
  const brands = ["All", ...new Set(fertilizersData.map((i) => i.brand))];

  let filtered = fertilizersData.filter((i) =>
    i.name.toLowerCase().includes(search.toLowerCase())
  );

  if (brand !== "All") filtered = filtered.filter((i) => i.brand === brand);
  if (sort === "low") filtered.sort((a, b) => a.price - b.price);
  if (sort === "high") filtered.sort((a, b) => b.price - a.price);
  if (sort === "rating") filtered.sort((a, b) => b.rating - a.rating);

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const paginated = filtered.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  return (
    <div className="fert-page">
      <h2 className="fert-title">Fertilizers</h2>

      <div className="fert-filters">
        <input placeholder="Search Fertilizers..." value={search} onChange={(e) => setSearch(e.target.value)} />

        <select value={brand} onChange={(e) => setBrand(e.target.value)}>
          {brands.map((b, idx) => <option key={idx}>{b}</option>)}
        </select>

        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="default">Sort</option>
          <option value="low">Price Low → High</option>
          <option value="high">Price High → Low</option>
          <option value="rating">Rating</option>
        </select>
      </div>

      <div className="fert-grid">
        {paginated.map((item) => (
          <FertilizerCard key={item.id} item={item} />
        ))}
      </div>

      <div className="fert-pagination">
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>⟵ Prev</button>
        <span>Page {page} of {totalPages}</span>
        <button disabled={page === totalPages} onClick={() => setPage(page + 1)}>Next ⟶</button>
      </div>

      <style>{`
        .fert-page { max-width:1300px;margin:auto;padding:40px 20px; }
        .fert-title { text-align:center;font-size:28px;font-weight:700;color:#2a7a0e;margin-bottom:25px; }

        .fert-filters { display:flex;gap:12px;justify-content:center;flex-wrap:wrap;margin-bottom:25px; }
        .fert-filters input,.fert-filters select {
          padding:10px 14px;border:1px solid #ccc;border-radius:6px;font-size:15px;
        }

        .fert-grid { display:grid;grid-template-columns: repeat(auto-fit,minmax(180px,1fr));gap:20px; }

        .fert-pagination { display:flex;justify-content:center;gap:15px;margin-top:30px;align-items:center; }
        .fert-pagination button { background:#2a7a0e;color:#fff;border:none;padding:8px 18px;border-radius:6px;font-weight:600; }
        .fert-pagination button:disabled { background:#ccc; }
      `}</style>
    </div>
  );
};

export default Fertilizers;
