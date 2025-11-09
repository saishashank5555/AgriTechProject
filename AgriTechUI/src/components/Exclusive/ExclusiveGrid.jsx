import React from "react";
import ExclusiveCard from "./ExclusiveCard";
import exclusiveData from "./exclusiveData";

const ExclusiveGrid = () => {
  return (
    <div className="exclusive-wrapper">
      <h2 className="exclusive-title">Exclusive</h2>

      <div className="exclusive-grid">
        {exclusiveData.map((item) => (
          <ExclusiveCard key={item.id} item={item} />
        ))}
      </div>

      <style>{`
        .exclusive-wrapper {
          max-width:1300px;
          margin:auto;
          padding:10px 20px;
        }
        .exclusive-title {
          text-align:center;
          font-size:28px;
          font-weight:700;
          margin-bottom:25px;
          color:#2a7a0e;
        }

        .exclusive-grid {
          display:grid;
          grid-template-columns:repeat(4, 1fr);
          gap:22px;
        }

        @media (max-width:1024px) {
          .exclusive-grid {
            grid-template-columns:repeat(3, 1fr);
          }
        }
        @media (max-width:768px) {
          .exclusive-grid {
            grid-template-columns:repeat(2, 1fr);
          }
        }
        @media (max-width:480px) {
          .exclusive-grid {
            grid-template-columns:repeat(1, 1fr);
          }
        }
      `}</style>
    </div>
  );
};

export default ExclusiveGrid;
