import React, { useState, useEffect } from "react";
import TrustBanner from "./TrustBanner";
import TrustBanner2 from "./TrustBanner2";

const TrustRotator = () => {
  const [showFirst, setShowFirst] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirst((prev) => !prev);
    }, 4000); // switch every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="trust-rotator-wrapper">

      <div className={`banner ${showFirst ? "visible" : "hidden"}`}>
        <TrustBanner />
      </div>

      <div className={`banner ${!showFirst ? "visible" : "hidden"}`}>
        <TrustBanner2 />
      </div>

      <style>{`
        .trust-rotator-wrapper {
          position: relative;
          max-width: 1300px;
          margin: 40px auto;
          padding: 0 20px;
        }

        .banner {
          position: absolute;
          width: 100%;
          opacity: 0;
          transform: scale(0.97);
          transition: opacity .6s ease, transform .6s ease;
        }

        .banner.visible {
          opacity: 1;
          transform: scale(1);
          position: relative;
        }

        .banner.hidden {
          opacity: 0;
          transform: scale(0.95);
        }
      `}</style>
    </div>
  );
};

export default TrustRotator;
