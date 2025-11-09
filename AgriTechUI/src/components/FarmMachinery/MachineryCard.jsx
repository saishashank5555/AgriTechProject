import React from "react";
import { Link } from "react-router-dom";

const MachineryCard = ({ item }) => {
  return (
    <Link to={`/machinery/${item.id}`} className="mach-card">
      <div className="mach-img-box">
        <img src={item.image} alt={item.name} />
      </div>

      <h3 className="mach-name">{item.name}</h3>
      <p className="mach-brand">{item.brand}</p>

      <div className="mach-price-row">
        <span className="mach-price">₹{item.price}</span>
        <span className="mach-mrp">₹{item.mrp}</span>
      </div>

      <style>{`
        .mach-card { background:#fff;border-radius:12px;padding:14px;
        text-align:center;box-shadow:0 4px 12px rgba(0,0,0,0.1);
        transition:.25s;display:block;text-decoration:none;color:#222; }
        .mach-card:hover { transform:translateY(-4px); }

        .mach-img-box { height:160px;border-radius:10px;overflow:hidden;background:#fafafa; }
        .mach-img-box img { width:100%;height:100%;object-fit:cover; }

        .mach-name { font-size:15px;font-weight:600;margin:10px 0 4px;color:#222; }
        .mach-brand { font-size:13px;color:#777;margin-bottom:8px; }

        .mach-price-row { display:flex;justify-content:center;gap:8px; }
        .mach-price { font-weight:700;color:#2a7a0e; }
        .mach-mrp { text-decoration:line-through;font-size:13px;color:#888; }
      `}</style>
    </Link>
  );
};

export default MachineryCard;
