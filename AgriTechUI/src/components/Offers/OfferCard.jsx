import React from "react";
import { Link } from "react-router-dom";

const OfferCard = ({ item }) => {
  const link = {
    seeds: `/seeds/${item.id}`,
    fertilizers: `/fertilizers/${item.id}`,
    machinery: `/machinery/${item.id}`,
  }[item.category];

  return (
    <Link to={link} className="offer-card">
      <div className="offer-img-box">
        <img src={item.image} alt={item.name} />
        <span className="offer-badge">-{item.discountPercent}%</span>
      </div>

      <h3 className="offer-name">{item.name}</h3>
      <p className="offer-brand">{item.brand}</p>

      <div className="offer-price-box">
        <span className="offer-price">₹{item.price}</span>
        <span className="offer-mrp">₹{item.mrp}</span>
      </div>

      <style>{`
        .offer-card {
          background:#fff;border-radius:12px;padding:14px;text-decoration:none;
          color:#111;text-align:center;box-shadow:0 4px 12px rgba(0,0,0,0.08);
          display:block;transition:.3s;
        }
        .offer-card:hover { transform:translateY(-4px); }

        .offer-img-box { position:relative;height:160px;border-radius:10px;overflow:hidden;background:#fafafa; }
        .offer-img-box img { width:100%;height:100%;object-fit:cover; }

        .offer-badge {
          position:absolute;top:8px;left:8px;background:#c62828;color:#fff;font-weight:600;
          padding:4px 8px;border-radius:6px;font-size:13px;
        }
        .offer-name { font-size:15px;font-weight:600;margin:10px 0 4px; }
        .offer-brand { font-size:13px;color:#777;margin-bottom:6px; }

        .offer-price-box { display:flex;gap:8px;justify-content:center; }
        .offer-price { color:#2a7a0e;font-weight:700; }
        .offer-mrp { text-decoration:line-through;color:#888;font-size:13px; }
      `}</style>
    </Link>
  );
};

export default OfferCard;
