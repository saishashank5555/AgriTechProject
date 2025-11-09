import React from "react";
import { Link } from "react-router-dom";
import machineryData from "./machineryData";
import MachineryCard from "./MachineryCard";

const FarmMachineryPreview = () => {
  const previewItems = machineryData.slice(0, 12); // ✅ Updated 6 → 12

  return (
    <div className="mach-preview-wrapper">

      <div className="mach-header-row">
        <h2 className="mach-preview-title">Farm Machinery</h2>
        <Link to="/category/farm-machinery" className="mach-more-btn">
          View More →
        </Link>
      </div>

      <div className="mach-scroll-row">
        {previewItems.map((item) => (
          <div key={item.id} className="scroll-item">
            <MachineryCard item={item} />
          </div>
        ))}
      </div>

      <style>{`
        .mach-preview-wrapper {
          max-width:1300px;
          margin:auto;
          padding:40px 20px;
        }

        .mach-header-row {
          display:flex;
          justify-content:space-between;
          align-items:center;
          margin-bottom:18px;
        }

        .mach-preview-title {
          font-size:26px;
          font-weight:700;
          color:#2a7a0e;
        }

        .mach-more-btn {
          background:#2a7a0e;
          color:#fff;
          padding:8px 18px;
          border-radius:6px;
          text-decoration:none;
          font-weight:600;
          transition:.3s;
        }
        .mach-more-btn:hover { opacity:.85; }

        /* ✅ Horizontal Scroll + Hide scrollbar */
        .mach-scroll-row {
          display:flex;
          gap:16px;
          overflow-x:auto;
          padding-bottom:10px;
          scroll-behavior:smooth;
          scrollbar-width:none; /* Firefox */
        }
        .mach-scroll-row::-webkit-scrollbar {
          display:none; /* Chrome, Safari, Edge */
        }

        .scroll-item {
          min-width:180px;
        }

      `}</style>
    </div>
  );
};

export default FarmMachineryPreview;
