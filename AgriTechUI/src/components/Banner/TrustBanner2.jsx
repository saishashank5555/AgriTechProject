import React from "react";

const TrustBanner2 = () => {
  return (
    <div className="trust2-wrapper">

      {/* Safe Payment */}
      <div className="trust2-item">
        <svg
          className="trust2-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#2a7a0e"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2l7 4v6c0 5-3.5 9-7 10-3.5-1-7-5-7-10V6l7-4z" />
          <circle cx="12" cy="12" r="2.2" />
        </svg>
        <p className="trust2-text">Safe & Secure <br /> Payment</p>
      </div>

      {/* Expert Advice */}
      <div className="trust2-item">
        <svg
          className="trust2-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#2a7a0e"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="8" r="4" />
          <path d="M6 21c1.5-3 4.5-5 6-5s4.5 2 6 5" />
          <path d="M16 3.5l2.5 2" />
        </svg>
        <p className="trust2-text">Expert Advice</p>
      </div>

      {/* Best Price */}
      <div className="trust2-item">
        <svg
          className="trust2-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#2a7a0e"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M8 12h8" />
          <path d="M12 8v8" />
          <circle cx="12" cy="12" r="9" />
        </svg>
        <p className="trust2-text">Best Price <br /> Assured</p>
      </div>

      <style>{`
        .trust2-wrapper {
          background: #e9f8e4;
          padding: 28px 16px;
          max-width: 1300px;
          margin: 0 auto;
          border-radius: 8px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .trust2-item {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .trust2-icon {
          width: 48px;
          height: 48px;
        }

        .trust2-text {
          font-size: 20px;
          font-weight: 600;
          color: #1a4d0a;
          line-height: 1.3;
          margin: 0;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .trust2-wrapper {
            flex-direction: column;
            text-align: center;
            gap: 20px;
          }
          .trust2-text {
            font-size: 18px;
          }
          .trust2-icon {
            width: 42px;
            height: 42px;
          }
        }

        @media (max-width: 480px) {
          .trust2-text {
            font-size: 16px;
          }
          .trust2-icon {
            width: 36px;
            height: 36px;
          }
        }
      `}</style>
    </div>
  );
};

export default TrustBanner2;
