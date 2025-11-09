import React from "react";
import { Link } from "react-router-dom";
import seedsData from "./seedsData";
import SeedCard from "./SeedCard";

const VegetableSeedsPreview = () => {
  const previewItems = seedsData.slice(0, 6); // show first 6 seeds

  return (
    <div className="seed-preview-wrapper">

      {/* ✅ Title + View More Row */}
      <div className="seed-header-row">
        <h2 className="seed-preview-title">Vegetable Seeds</h2>

        <Link to="/category/vegetable-seeds" className="seed-more-btn">
          View More →
        </Link>
      </div>

      {/* ✅ Horizontal Scroll Cards */}
      <div className="seed-scroll-row">
        {previewItems.map((item) => (
          <div key={item.id} className="scroll-item">
            <SeedCard item={item} />
          </div>
        ))}
      </div>

      <style>{`
        .seed-preview-wrapper {
          max-width: 1300px;
          margin: auto;
          padding: 40px 20px;
        }

        /* ✅ Title & View More aligned nicely */
        .seed-header-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 18px;
        }

        .seed-preview-title {
          font-size: 26px;
          font-weight: 700;
          color: #2a7a0e;
        }

        .seed-more-btn {
          background: #2a7a0e;
          color: white;
          padding: 8px 18px;
          border-radius: 6px;
          text-decoration: none;
          font-weight: 600;
          transition: 0.3s;
        }

        .seed-more-btn:hover {
          opacity: 0.85;
        }

        /* ✅ Horizontal Card Scroll */
        .seed-scroll-row {
          display: flex;
          gap: 16px;
          overflow-x: auto;
          padding-bottom: 10px;
          scroll-behavior: smooth;
        }

        .seed-scroll-row::-webkit-scrollbar {
          height: 6px;
        }

        .seed-scroll-row::-webkit-scrollbar-thumb {
          background: #bbbbbb;
          border-radius: 4px;
        }

        .scroll-item {
          min-width: 180px;
        }

        @media(max-width: 600px) {
          .scroll-item { min-width: 150px; }
        }
      `}</style>
    </div>
  );
};

export default VegetableSeedsPreview;
