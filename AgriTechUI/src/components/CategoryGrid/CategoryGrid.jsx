import React from "react";
import { Link } from "react-router-dom";
import categories from "./categoryData";

export default function CategoryGrid() {
  return (
    <section className="cat-wrap">
      <h2 className="cat-title">Categories</h2>

      <div className="cat-grid">
        {categories.map((c, i) => (
          <Link key={c.id} to={c.to} className="cat-card">
            <div className="cat-thumb" style={{ background: gradientColors[i % gradientColors.length] }}>
              <img src={c.img} alt={c.name} loading="lazy" />
            </div>
            <div className="cat-name">{c.name}</div>
          </Link>
        ))}
      </div>

      <style>{`
        .cat-wrap {
          max-width: 1200px;
          margin: 35px auto 40px;
          padding: 0 16px;
        }

        .cat-title {
          text-align: center;
          font-size: 34px;
          font-weight: 700;
          margin-bottom: 32px;
          color: #1b3a1a;
          letter-spacing: -0.5px;
        }

        /* GRID */
        .cat-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 32px;
          place-items: center;
        }

        /* CARD */
        .cat-card {
          text-decoration: none;
          color: #1a1a1a;
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: transform .3s ease, filter .3s ease;
        }

        /* CIRCLE IMAGE */
        .cat-thumb {
          width: 150px;
          height: 150px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          box-shadow: 0 8px 28px rgba(0,0,0,0.12);
          transition: transform .35s ease, box-shadow .35s ease;
        }

        .cat-thumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform .4s ease;
        }

        /* TITLE */
        .cat-name {
          margin-top: 14px;
          text-align: center;
          font-size: 15px;
          font-weight: 600;
        }

        /* PREMIUM HOVER EFFECT */
        @media (hover:hover) {
          .cat-card:hover .cat-thumb {
            transform: translateY(-6px) scale(1.08);
            box-shadow: 0 14px 38px rgba(0,0,0,0.18);
          }
          .cat-card:hover img {
            transform: scale(1.15);
          }
        }

        /* RESPONSIVE */
        @media (max-width: 768px) {
          .cat-thumb { width: 120px; height: 120px; }
        }

        @media (max-width: 520px) {
          .cat-grid { gap: 20px; }
          .cat-thumb { width: 95px; height: 95px; }
          .cat-name { font-size: 13px; }
        }

        @media (max-width: 380px) {
          .cat-grid { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>
    </section>
  );
}

// 🎨 Premium gradient palette
const gradientColors = [
  "linear-gradient(145deg, #d9f6ff, #fffdf3)",
  "linear-gradient(145deg, #ffe5ec, #fffdfa)",
  "linear-gradient(145deg, #e8ffe8, #fffef2)",
  "linear-gradient(145deg, #f1e8ff, #fffdf6)",
  "linear-gradient(145deg, #ffe9d9, #fffdf9)",
  "linear-gradient(145deg, #dff5ff, #fffef4)",
];
