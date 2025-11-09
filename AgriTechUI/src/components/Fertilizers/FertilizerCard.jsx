import React from "react";
import { Link } from "react-router-dom";

const FertilizerCard = ({ item }) => {
  return (
    <Link to={`/fertilizers/${item.id}`} className="fert-card">
      <div className="fert-img-box">
        <img src={item.image} alt={item.name} />
      </div>

      <h3 className="fert-name">{item.name}</h3>
      <p className="fert-brand">{item.brand}</p>

      <div className="fert-price-row">
        <span className="fert-price">₹{item.price}</span>
        <span className="fert-mrp">₹{item.mrp}</span>
      </div>

      <style>{`
        .fert-card {
          background:#fff;border-radius:12px;padding:14px;
          text-align:center;box-shadow:0 4px 12px rgba(0,0,0,0.08);
          transition:.25s;display:block;text-decoration:none;color:#222;
        }
        .fert-card:hover { transform:translateY(-4px); }

        .fert-img-box { height:160px;border-radius:10px;overflow:hidden;background:#fafafa; }
        .fert-img-box img { width:100%;height:100%;object-fit:cover; }

        .fert-name { margin:10px 0 4px;font-size:15px;font-weight:600;color:#222; }
        .fert-brand { font-size:13px;color:#777;margin-bottom:8px; }

        .fert-price-row { display:flex;justify-content:center;gap:8px; }
        .fert-price { font-weight:700;color:#2a7a0e; }
        .fert-mrp { text-decoration:line-through;font-size:13px;color:#888; }
      `}</style>
    </Link>
  );
};

export default FertilizerCard;
