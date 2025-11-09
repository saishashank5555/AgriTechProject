import React from "react";
import { Link } from "react-router-dom";
import machineryData from "./machineryData";
import MachineryCard from "./MachineryCard";

const FarmMachineryPreview = () => {
  const previewItems = machineryData.slice(0, 12); // Show first 12 items

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
          padding:0 20px; /* Removed extra top padding */
        }

        .mach-header-row {
          display:flex;
          justify-content:space-between;
          align-items:center;
          margin-bottom:6px; /* Reduced space */
          margin-top:30px; /* Added top margin for spacing */
        }

        .mach-preview-title {
          font-size:24px;
          font-weight:700;
          color:#2a7a0e;
          margin:0; /* Removed default h2 margin */
        }

        .mach-more-btn {
          background:#2a7a0e;
          color:#fff;
          padding:6px 14px;
          border-radius:6px;
          text-decoration:none;
          font-weight:600;
          transition:.3s;
        }
        .mach-more-btn:hover { opacity:.85; }

        /* Horizontal Scroll */
        .mach-scroll-row {
          display:flex;
          gap:14px;
          overflow-x:auto;
          padding-bottom:8px;
          scroll-behavior:smooth;
          scrollbar-width:none;
          margin-top:0;
        }
        .mach-scroll-row::-webkit-scrollbar {
          display:none; /* Hide scrollbar cross-browser */
        }

        .scroll-item {
          min-width:180px;
        }
      `}</style>
    </div>
  );
};

export default FarmMachineryPreview;
