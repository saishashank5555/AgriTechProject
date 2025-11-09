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
          padding:40px 20px;
        }

        .offers-head-row { 
          display:flex;
          justify-content:space-between;
          align-items:center;
          margin-bottom:18px;
        }

        .offers-title { 
          font-size:26px;
          font-weight:700;
          color:#2a7a0e;
        }

        .offers-more-btn {
          background:#2a7a0e;
          color:#fff;
          padding:8px 18px;
          border-radius:6px;
          text-decoration:none;
          font-weight:600;
          transition:.3s;
        }
        .offers-more-btn:hover { opacity:.8; }

        /* Scroll container but hide scrollbar */
        .offers-scroll {
          display:flex;
          gap:16px;
          overflow-x:auto;
          padding-bottom:10px;
          scroll-behavior:smooth;
          scrollbar-width:none; /* Firefox */
        }
        .offers-scroll::-webkit-scrollbar {
          display:none; /* Chrome, Safari, Edge */
        }

        .scroll-item { min-width:180px; }
      `}</style>
    </div>
  );
};

export default OffersPreview;
