import React from "react";
import { Link } from "react-router-dom";
import fertilizersData from "./fertilizersData";
import FertilizerCard from "./FertilizerCard";

const FertilizersPreview = () => {
  const previewItems = fertilizersData.slice(0, 12); // Show first 12 fertilizers

  return (
    <div className="fert-preview-wrapper">

      <div className="fert-header-row">
        <h2 className="fert-preview-title">Fertilizers</h2>
        <Link to="/category/fertilizers" className="fert-more-btn">
          View More →
        </Link>
      </div>

      <div className="fert-scroll-row">
        {previewItems.map((item) => (
          <div key={item.id} className="scroll-item">
            <FertilizerCard item={item} />
          </div>
        ))}
      </div>

      <style>{`
        .fert-preview-wrapper {
          max-width: 1300px;
          margin: auto;
          padding: 0 20px; /* Removed top padding */
        }

        .fert-header-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 6px; /* Reduced extra space */
          margin-top:30px; /* Added top margin for spacing */
        }

        .fert-preview-title {
          font-size: 24px;
          font-weight: 700;
          color: #2a7a0e;
          margin: 0; /* Removed default margin */
        }

        .fert-more-btn {
          background: #2a7a0e;
          color: white;
          padding: 6px 14px;
          border-radius: 6px;
          text-decoration: none;
          font-weight: 600;
          transition: 0.3s;
        }
        .fert-more-btn:hover { opacity: 0.85; }

        /* Horizontal Scroll */
        .fert-scroll-row {
          display: flex;
          gap: 14px;
          overflow-x: auto;
          padding-bottom: 8px;
          scroll-behavior: smooth;
          scrollbar-width: none; /* Hide scrollbar for Firefox */
          margin-top: 0;
        }
        .fert-scroll-row::-webkit-scrollbar {
          display: none; /* Hide scroll in Chrome/Safari/Edge */
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

export default FertilizersPreview;
