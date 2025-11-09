import React from "react";
import { Link } from "react-router-dom";

const BestSellingCard = ({ item }) => {
  const link = {
    seeds: `/seeds/${item.id}`,
    fertilizers: `/fertilizers/${item.id}`,
    machinery: `/machinery/${item.id}`,
  }[item.category];

  return (
    <Link to={link} className="bs-card">
      <div className="bs-img-box">
        <img src={item.image} alt={item.name} />
        <span className="bs-badge">⭐ {item.rating}</span>
      </div>

      <h3 className="bs-name">{item.name}</h3>
      <p className="bs-brand">{item.brand}</p>

      <div className="bs-price-row">
        <span className="bs-price">₹{item.price}</span>
        <span className="bs-mrp">₹{item.mrp}</span>
      </div>

      <style>{`
        .bs-card {
          background:#fff;border-radius:12px;padding:14px;text-decoration:none;
          color:#111;text-align:center;box-shadow:0 4px 12px rgba(0,0,0,0.08);
          display:block;transition:.3s;
        }
        .bs-card:hover { transform:translateY(-4px); }

        .bs-img-box { position:relative;height:160px;border-radius:10px;overflow:hidden;background:#fafafa; }
        .bs-img-box img { width:100%;height:100%;object-fit:cover; }

        .bs-badge {
          position:absolute;top:8px;left:8px;background:#2a7a0e;color:#fff;font-weight:600;
          padding:4px 8px;border-radius:6px;font-size:13px;
        }

        .bs-name { font-size:15px;font-weight:600;margin:10px 0 4px; }
        .bs-brand { font-size:13px;color:#777;margin-bottom:6px; }

        .bs-price-row { display:flex;gap:8px;justify-content:center; }
        .bs-price { color:#2a7a0e;font-weight:700; }
        .bs-mrp { text-decoration:line-through;color:#888;font-size:13px; }
      `}</style>
    </Link>
  );
};

export default BestSellingCard;
