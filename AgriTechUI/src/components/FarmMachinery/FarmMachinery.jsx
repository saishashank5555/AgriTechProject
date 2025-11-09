import React, { useState } from "react";
import machineryData from "./machineryData";
import MachineryCard from "./MachineryCard";

const FarmMachinery = () => {
  const [search, setSearch] = useState("");

  const filtered = machineryData.filter((i) =>
    i.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="mach-page">
      <h2 className="mach-title">Farm Machinery</h2>

      <div className="mach-search-box">
        <input placeholder="Search machinery..." value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>

      <div className="mach-grid">
        {filtered.map((item) => (
          <MachineryCard key={item.id} item={item} />
        ))}
      </div>

      <style>{`
        .mach-page { max-width:1300px;margin:auto;padding:40px 20px; }
        .mach-title { text-align:center;font-size:28px;font-weight:700;color:#2a7a0e;margin-bottom:25px; }

        .mach-search-box { display:flex;justify-content:center;margin-bottom:25px; }
        .mach-search-box input {
          padding:10px 14px;border:1px solid #ccc;border-radius:6px;font-size:15px;width:280px;
        }

        .mach-grid { display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));
        gap:20px; }
      `}</style>
    </div>
  );
};

export default FarmMachinery;
