import React from "react";
import { useParams } from "react-router-dom";
import seedsData from "./seedsData";

export default function SeedDetailsPage() {
  const { id } = useParams();
  const seed = seedsData.find((item) => item.id === Number(id));

  if (!seed) return <h2 style={{textAlign:"center", marginTop:"40px"}}>Seed Not Found</h2>;

  return (
    <div className="seed-details-page">
      <div className="seed-details-container">

        {/* Left Image */}
        <div className="seed-detail-img-box">
          <img src={seed.image} alt={seed.name} />
        </div>

        {/* Right Info */}
        <div className="seed-info">
          <h2>{seed.name}</h2>
          <p className="brand">{seed.brand}</p>

          <div className="price-section">
            <span className="price">₹{seed.price}</span>
            <span className="mrp">₹{seed.mrp}</span>
          </div>

          <select className="pack-select">
            <option>Pack Size: 10g</option>
            <option>Pack Size: 25g</option>
            <option>Pack Size: 50g</option>
          </select>

          <div className="btn-row">
            <button className="buy-btn">Buy Now</button>
            <button className="cart-btn">Add to Cart</button>
          </div>
        </div>
      </div>

      <style>{`
        .seed-details-page { max-width:1300px;margin:auto;padding:40px 20px; }
        .seed-details-container { display:flex;flex-wrap:wrap;gap:40px; }

        .seed-detail-img-box { flex:1;min-width:260px;background:#fafafa;border-radius:12px;overflow:hidden; }
        .seed-detail-img-box img { width:100%;height:100%;object-fit:cover; }

        .seed-info { flex:1;min-width:260px; }
        .seed-info h2 { font-size:26px;color:#2a7a0e;margin-bottom:6px; }
        .brand { font-size:15px;color:#777;margin-bottom:18px; }

        .price-section { display:flex;gap:10px;margin-bottom:18px; }
        .price { font-size:24px;font-weight:700;color:#2a7a0e; }
        .mrp { font-size:18px;color:#999;text-decoration:line-through; }

        .pack-select { padding:10px;width:200px;margin-bottom:18px;border-radius:6px;border:1px solid #ccc; }

        .btn-row { display:flex;gap:12px;margin-top:10px; }
        .buy-btn,.cart-btn {
          padding:12px 20px;border-radius:6px;border:none;font-size:15px;
          cursor:pointer;transition: .3s;font-weight:600;
        }
        .buy-btn { background:#2a7a0e;color:#fff; }
        .cart-btn { background:#fff;border:1px solid #2a7a0e;color:#2a7a0e; }
        .cart-btn:hover { background:#2a7a0e;color:#fff; }

        @media(max-width:700px){
          .seed-details-container { flex-direction:column; }
        }
      `}</style>
    </div>
  );
}
