import React from "react";
import { Link } from "react-router-dom";

const ExclusiveCard = ({ item }) => {
  return (
    <Link to={item.to} className="ex-card">
      <img src={item.image} alt="exclusive" />

      <style>{`
        .ex-card {
          display:block;
          border-radius:14px;
          overflow:hidden;
          box-shadow:0 6px 18px rgba(0,0,0,0.12);
          transition:.3s;
          background:#fff;
        }
        .ex-card:hover { transform:translateY(-6px); }
        .ex-card img {
          width:100%;
          height:260px;
          object-fit:cover;
        }

        @media (max-width: 1024px) {
          .ex-card img { height:220px; }
        }
        @media (max-width: 768px) {
          .ex-card img { height:200px; }
        }
        @media (max-width: 480px) {
          .ex-card img { height:170px; }
        }
      `}</style>
    </Link>
  );
};

export default ExclusiveCard;
