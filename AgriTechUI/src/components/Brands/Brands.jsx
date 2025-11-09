import React from "react";
import { useNavigate } from "react-router-dom";
import brandsData from "./brandsData";

const Brands = () => {
  const navigate = useNavigate();

  const goToBrandProducts = (slug) => {
    navigate(`/brand/${slug}`);
  };

  return (
    <div className="brands-section">
      <div className="brands-header">
        <h2>Brands</h2>
        <a className="view-all" onClick={() => navigate("/brands")}>View All</a>
      </div>

      <div className="slider">
        <div className="slide-track">
          {brandsData.concat(brandsData).map((brand, index) => (
            <div
              className="brand-card"
              key={index}
              onClick={() => goToBrandProducts(brand.slug)}
            >
              <img src={brand.image} alt={brand.name} />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .brands-section {
          background: #E9F8E4;
          padding: 40px 20px;
        }

        .brands-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1300px;
          margin: 0 auto 20px auto;
        }

        .brands-header h2 {
          font-size: 28px;
          font-weight: 700;
          color: #1a4d0a;
        }

        .view-all {
          font-size: 16px;
          color: #1a4d0a;
          cursor: pointer;
          text-decoration: underline;
        }

        .slider {
          height: 140px;
          overflow: hidden;
          position: relative;
          max-width: 1300px;
          margin: auto;
        }

        .slide-track {
          display: flex;
          width: calc(160px * ${brandsData.length * 2});
          animation: scroll 25s linear infinite;
        }

        .slider:hover .slide-track {
          animation-play-state: paused; /* ✅ Pause on hover */
        }

        .brand-card {
          background: white;
          border-radius: 12px;
          padding: 18px;
          width: 160px;
          height: 110px;
          margin: 0 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 6px rgba(0,0,0,0.08);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer; /* ✅ Clickable */
        }

        .brand-card:hover {
          transform: scale(1.08);
          box-shadow: 0px 4px 12px rgba(0,0,0,0.12);
        }

        .brand-card img {
          width: 100%;
          height: auto;
          object-fit: contain;
        }

        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @media (max-width: 768px) {
          .brand-card {
            width: 130px;
            height: 90px;
            padding: 14px;
          }
        }
      `}</style>
    </div>
  );
};

export default Brands;
