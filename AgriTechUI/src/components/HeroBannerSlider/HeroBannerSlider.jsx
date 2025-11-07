import React, { useEffect, useState } from "react";
import bannerData from "./bannerData";

export default function HeroBannerSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % bannerData.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hero-slider">
      {bannerData.map((banner, i) => (
        <div
          key={banner.id}
          className={`hero-slide ${index === i ? "active" : ""}`}
          style={{ backgroundColor: banner.backgroundColor }}
        >
          <div className="hero-content">
            <h2>{banner.title}</h2>
            <p>{banner.subtitle}</p>

            <div className="hero-buttons">
              <button className="buy-btn">Buy Now</button>
              <button className="info-btn">More Info</button>
            </div>
          </div>

          <div className="hero-img-box">
            <img src={banner.image} alt="banner" />
          </div>
        </div>
      ))}

      <div className="dots">
        {bannerData.map((_, i) => (
          <span
            key={i}
            className={`dot ${index === i ? "active" : ""}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>

      {/* INTERNAL CSS */}
      <style>{`
        .hero-slider {
          position: relative;
          width: 100%;
          height: 380px;
          overflow: hidden;
        }

        .hero-slide {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 60px;
          opacity: 0;
          transition: opacity 0.7s ease-in-out;
        }

        .hero-slide.active {
          opacity: 1;
        }

        .hero-content {
          max-width: 45%;
        }

        .hero-content h2 {
          font-size: 38px;
          font-weight: 700;
          color: #1b5e20;
          margin-bottom: 12px;
        }

        .hero-content p {
          font-size: 18px;
          margin-bottom: 22px;
          color: #333;
        }

        .hero-buttons {
          display: flex;
          gap: 14px;
        }

        .buy-btn {
          background: #2e7d32;
          border: none;
          padding: 12px 28px;
          border-radius: 6px;
          color: #fff;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
        }

        .info-btn {
          background: #fff;
          border: 2px solid #2e7d32;
          padding: 12px 28px;
          border-radius: 6px;
          color: #2e7d32;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
        }

        .hero-img-box {
          width: 42%;
          height: 85%;
          border-radius: 28px;
          overflow: hidden;
          box-shadow: 0 6px 16px rgba(0,0,0,0.15);
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-img-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .dots {
          position: absolute;
          bottom: 18px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 10px;
        }

        .dot {
          width: 12px;
          height: 12px;
          background: #ccc;
          border-radius: 50%;
          cursor: pointer;
          transition: 0.3s;
        }

        .dot.active {
          background: #2e7d32;
        }

        /* ✅ RESPONSIVE */
        @media (max-width: 768px) {
          .hero-slide {
            flex-direction: column;
            text-align: center;
            padding: 20px;
            height: auto;
            gap: 18px;
          }

          .hero-content {
            max-width: 100%;
          }

          .hero-content h2 {
            font-size: 28px;
          }

          .hero-content p {
            font-size: 15px;
          }

          .hero-img-box {
            width: 90%;
            height: 240px;
            border-radius: 18px;
          }

          .hero-buttons {
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .hero-content h2 {
            font-size: 24px;
          }
          .buy-btn, .info-btn {
            padding: 10px 20px;
            font-size: 14px;
          }
        }
      `}</style>
    </div>
  );
}
