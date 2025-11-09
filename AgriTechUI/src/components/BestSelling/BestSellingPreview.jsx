import React from "react";
import { Link } from "react-router-dom";
import { getBestSelling } from "./bestSellingData";
import BestSellingCard from "./BestSellingCard";

const BestSellingPreview = () => {
  const items = getBestSelling(12); // Showing 12 items

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
          padding:0 20px; /* Removed top padding */
        }

        .bs-head-row { 
          display:flex;
          justify-content:space-between;
          align-items:center;
          margin-bottom:6px; /* Reduced spacing */
          margin-top:30px; /* Added top margin for spacing */
        }

        .bs-title { 
          font-size:24px;
          font-weight:700;
          color:#2a7a0e;
          margin:0; /* Removed default h2 margin */
        
        }

        .bs-more-btn {
          background:#2a7a0e;
          color:#fff;
          padding:6px 14px;
          border-radius:6px;
          text-decoration:none;
          font-weight:600;
          transition:.3s;
        }
        .bs-more-btn:hover { opacity:.8; }

        /* Scroll container */
        .bs-scroll {
          display:flex;
          gap:14px;
          overflow-x:auto;
          padding-bottom:8px;
          scroll-behavior:smooth;
          scrollbar-width:none;
          margin-top:0; /* Remove extra gap */
        }
        .bs-scroll::-webkit-scrollbar {
          display:none;
        }

        .scroll-item { 
          min-width:180px;
        }
      `}</style>
    </div>
  );
};

export default BestSellingPreview;
