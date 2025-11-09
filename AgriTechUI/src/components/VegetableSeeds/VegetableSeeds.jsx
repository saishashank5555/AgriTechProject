import React, { useState } from "react";
import seedsData from "./seedsData";
import SeedCard from "./SeedCard";

const VegetableSeeds = () => {
  const [search, setSearch] = useState("");
  const [brand, setBrand] = useState("All");
  const [sort, setSort] = useState("default");
  const [page, setPage] = useState(1);

  const itemsPerPage = 12;

  // Get unique brand list
  const brands = ["All", ...new Set(seedsData.map((item) => item.brand))];

  // Filtering
  let filtered = seedsData.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  if (brand !== "All") {
    filtered = filtered.filter((item) => item.brand === brand);
  }

  // Sorting
  if (sort === "low") filtered.sort((a, b) => a.price - b.price);
  if (sort === "high") filtered.sort((a, b) => b.price - a.price);
  if (sort === "rating") filtered.sort((a, b) => b.rating - a.rating);

  // Pagination logic
  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const start = (page - 1) * itemsPerPage;
  const paginated = filtered.slice(start, start + itemsPerPage);

  return (
    <div className="seed-page">

      <h2 className="seed-title">Vegetable Seeds</h2>

      {/* Filters */}
      <div className="seed-filters">
        <input
          type="text"
          placeholder="Search Seeds..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select value={brand} onChange={(e) => setBrand(e.target.value)}>
          {brands.map((b, idx) => (
            <option key={idx} value={b}>{b}</option>
          ))}
        </select>

        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="default">Sort By</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
          <option value="rating">Rating</option>
        </select>
      </div>

      {/* Grid */}
      <div className="seed-grid">
        {paginated.map((item) => (
          <SeedCard key={item.id} item={item} />
        ))}
      </div>

      {/* Pagination */}
      <div className="seed-pagination">
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>⟵ Prev</button>

        <span>Page {page} of {totalPages}</span>

        <button disabled={page === totalPages} onClick={() => setPage(page + 1)}>Next ⟶</button>
      </div>

      {/* INTERNAL CSS */}
      <style>{`
        .seed-page { max-width:1300px;margin:auto;padding:40px 20px; }

        .seed-title { text-align:center;margin-bottom:25px;font-size:28px;font-weight:700;color:#2a7a0e; }

        .seed-filters {
          display:flex;gap:12px;flex-wrap:wrap;justify-content:center;
          margin-bottom:25px;
        }
        .seed-filters input,.seed-filters select {
          padding:10px 14px;border:1px solid #ccc;border-radius:6px;font-size:15px;outline:none;
        }
        .seed-filters input:focus,.seed-filters select:focus { border-color:#2a7a0e; }

        .seed-grid {
          display:grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap:20px;
        }

        .seed-pagination {
          margin-top:30px;display:flex;justify-content:center;gap:15px;align-items:center;
        }
        .seed-pagination button {
          background:#2a7a0e;color:#fff;border:none;padding:8px 16px;border-radius:6px;cursor:pointer;font-weight:600;
        }
        .seed-pagination button:disabled { background:#ccc;cursor:not-allowed; }
      `}</style>
    </div>
  );
};

export default VegetableSeeds;
