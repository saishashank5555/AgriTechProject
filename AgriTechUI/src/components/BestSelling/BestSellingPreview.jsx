import React from "react";
import { Link } from "react-router-dom";
import { getBestSelling } from "./bestSellingData";
import BestSellingCard from "./BestSellingCard";

const BestSellingPreview = () => {
  const items = getBestSelling(12); // Showing 6 items in preview

  return (
    <div className="bs-preview-wrap">

      <div className="bs-head-row">
        <h2 className="bs-title">Best Selling</h2>
        <Link to="/best-selling" className="bs-more-btn">View More →</Link>
      </div>

      <div className="bs-scroll">
        {items.map((item) => (
          <div key={item.id} className="scroll-item">
            <BestSellingCard item={item} />
          </div>
        ))}
      </div>

      <style>{`
        .bs-preview-wrap { 
          max-width:1300px;
          margin:auto;
          padding:40px 20px;
        }

        .bs-head-row { 
          display:flex;
          justify-content:space-between;
          align-items:center;
          margin-bottom:18px;
        }

        .bs-title { 
          font-size:26px;
          font-weight:700;
          color:#2a7a0e;
        }

        .bs-more-btn {
          background:#2a7a0e;
          color:#fff;
          padding:8px 18px;
          border-radius:6px;
          text-decoration:none;
          font-weight:600;
          transition:.3s;
        }
        .bs-more-btn:hover { opacity:.8; }

        /* Scroll container but HIDE scrollbar */
        .bs-scroll {
          display:flex;
          gap:16px;
          overflow-x:auto;
          padding-bottom:10px;
          scroll-behavior:smooth;
          scrollbar-width:none; /* Firefox */
        }
        .bs-scroll::-webkit-scrollbar {
          display:none; /* Chrome, Safari, Edge */
        }

        .scroll-item { 
          min-width:180px;
        }
      `}</style>
    </div>
  );
};

export default BestSellingPreview;
