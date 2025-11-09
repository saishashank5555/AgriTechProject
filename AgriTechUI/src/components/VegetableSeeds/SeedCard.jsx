import React from "react";
import { Link } from "react-router-dom";

const SeedCard = ({ item }) => {
  return (
    <Link to={`/seeds/${item.id}`} className="seed-card">
      <div className="seed-img-box">
        <img src={item.image} alt={item.name} />
      </div>

      <h3 className="seed-name">{item.name}</h3>
      <p className="seed-brand">{item.brand}</p>

      <div className="seed-price-row">
        <span className="seed-price">₹{item.price}</span>
        <span className="seed-mrp">₹{item.mrp}</span>
      </div>

      {/* ✅ Internal CSS */}
      <style>{`
        .seed-card {
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.08);
          padding: 14px;
          text-align: center;
          transition: transform .25s ease;
          text-decoration: none;
          color: #222;
          display: block;
          cursor: pointer;
        }

        .seed-card:hover {
          transform: translateY(-4px);
        }

        .seed-img-box {
          width: 100%;
          height: 160px;
          background: #fafafa;
          border-radius: 10px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .seed-img-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .seed-name {
          font-size: 15px;
          font-weight: 600;
          margin: 12px 0 6px;
          color: #222;
          line-height: 1.3;
        }

        .seed-brand {
          font-size: 13px;
          color: #777;
          margin-bottom: 8px;
        }

        .seed-price-row {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
          margin-bottom: 10px;
        }

        .seed-price {
          font-size: 16px;
          font-weight: 700;
          color: #2a7a0e;
        }

        .seed-mrp {
          font-size: 13px;
          color: #888;
          text-decoration: line-through;
        }

        @media(max-width: 600px) {
          .seed-img-box {
            height: 140px;
          }
        }
      `}</style>
    </Link>
  );
};

export default SeedCard;
