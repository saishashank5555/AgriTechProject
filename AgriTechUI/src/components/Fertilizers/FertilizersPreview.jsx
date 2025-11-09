import React from "react";
import { Link } from "react-router-dom";
import fertilizersData from "./fertilizersData";
import FertilizerCard from "./FertilizerCard";

const FertilizersPreview = () => {
  const previewItems = fertilizersData.slice(0, 12); // ✅ Updated 6 → 12

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
          padding: 40px 20px;
        }

        .fert-header-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 18px;
        }

        .fert-preview-title {
          font-size: 26px;
          font-weight: 700;
          color: #2a7a0e;
        }

        .fert-more-btn {
          background: #2a7a0e;
          color: white;
          padding: 8px 18px;
          border-radius: 6px;
          text-decoration: none;
          font-weight: 600;
          transition: 0.3s;
        }
        .fert-more-btn:hover { opacity: 0.85; }

        /* ✅ Horizontal Scroll + Hide Scrollbar */
        .fert-scroll-row {
          display: flex;
          gap: 16px;
          overflow-x: auto;
          padding-bottom: 10px;
          scroll-behavior: smooth;
          scrollbar-width: none; /* Firefox */
        }
        .fert-scroll-row::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Edge */
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
