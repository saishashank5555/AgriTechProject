import React from "react";

const TrustBanner = () => {
  return (
    <div className="trust-banner">
      <div className="trust-item">
        <span className="trust-icon">🏷️</span>
        <p className="trust-text">100% Branded <br /> Products</p>
      </div>

       {/* Original Products */}
      <div className="trust-item">
        <svg
          className="trust-icon"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#2a7a0e"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z"></path>
        </svg>
        <p className="trust-text">100% Original <br /> Products</p>
      </div>

      <div className="trust-item">
        <span className="trust-icon">🚚</span>
        <p className="trust-text">Free Delivery</p>
      </div>

      <style>{`
        .trust-banner {
          background: #eef8dd;
          padding: 28px 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1300px;
          margin: 0 auto;
          border-radius: 8px;
        }

        .trust-item {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .trust-icon {
          font-size: 38px;
          color: #2a7a0e;
        }

        .trust-text {
          font-size: 20px;
          font-weight: 600;
          color: #1a4d0a;
          line-height: 1.3;
          margin: 0;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .trust-banner {
            flex-direction: column;
            text-align: center;
            gap: 20px;
          }
          .trust-text {
            font-size: 18px;
          }
          .trust-icon {
            font-size: 34px;
          }
        }

        @media (max-width: 480px) {
          .trust-text {
            font-size: 16px;
          }
          .trust-icon {
            font-size: 30px;
          }
        }
      `}</style>
    </div>
  );
};

export default TrustBanner;
