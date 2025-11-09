import React from "react";
import { Link } from "react-router-dom";
import { getTodayOffers } from "./offersData";
import OfferCard from "./OfferCard";

const OffersPreview = () => {
  const items = getTodayOffers(12); // Showing 12 products

  return (
    <div className="offers-preview-wrap">

      <div className="offers-head-row">
        <h2 className="offers-title">Today's Offers</h2>
        <Link to="/offers-today" className="offers-more-btn">View More →</Link>
      </div>

      <div className="offers-scroll">
        {items.map((item) => (
          <div key={item.id} className="scroll-item">
            <OfferCard item={item} />
          </div>
        ))}
      </div>

      <style>{`
        .offers-preview-wrap { 
          max-width:1300px;
          margin:auto;
          padding:0 20px;
        }

        .offers-head-row { 
          display:flex;
          justify-content:space-between;
          align-items:center;
          margin-bottom:6px; /* Reduced from 18px */
          margin-top:30px; /* Added top margin for spacing */
        }

        .offers-title { 
          font-size:24px;
          font-weight:700;
          color:#2a7a0e;
          margin:0; /* Removed default h2 margin */
       
        }

        .offers-more-btn {
          background:#2a7a0e;
          color:#fff;
          padding:6px 14px;
          border-radius:6px;
          text-decoration:none;
          font-weight:600;
          transition:.3s;
        }
        .offers-more-btn:hover { opacity:.8; }

        /* Horizontal Scroll */
        .offers-scroll {
          display:flex;
          gap:14px;
          overflow-x:auto;
          padding-bottom:8px;
          scroll-behavior:smooth;
          scrollbar-width:none;
          margin-top:0; /* Remove spacing above product list */
        }
        .offers-scroll::-webkit-scrollbar {
          display:none;
        }

        .scroll-item { min-width:180px; }
      `}</style>
    </div>
  );
};

export default OffersPreview;
