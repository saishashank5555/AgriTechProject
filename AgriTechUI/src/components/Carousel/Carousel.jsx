import React, { useEffect, useRef, useState } from "react";

const Carousel = ({
  items = [],
  renderSlide,
  animation = "fade",
  autoPlayMs = 3500,
  showDots = true,
}) => {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  const next = () => setIndex((prev) => (prev + 1) % items.length);

  useEffect(() => {
    if (!autoPlayMs) return;
    timerRef.current = setInterval(next, autoPlayMs);
    return () => clearInterval(timerRef.current);
  }, [index, autoPlayMs]);

  const styles = {
    container: {
      width: "100%",
      position: "relative",
      overflow: "hidden",
      userSelect: "none",
    },
    fadeWrapper: {
      position: "relative",
      height: "50vw",
      maxHeight: "320px",
      minHeight: "180px",
      borderRadius: "14px",
      overflow: "hidden",
    },
    fadeSlide: (active) => ({
      position: "absolute",
      inset: 0,
      opacity: active ? 1 : 0,
      transition: "opacity 700ms ease",
    }),

    dots: {
      display: "flex",
      justifyContent: "center",
      marginTop: "12px",
      gap: "8px",
    },
    dot: (active) => ({
      width: active ? "26px" : "10px",
      height: "8px",
      borderRadius: "999px",
      background: active ? "#22c55e" : "#d1d5db",
      cursor: "pointer",
      transition: "all 250ms ease",
    }),
  };

  return (
    <div style={styles.container}>
      <div style={styles.fadeWrapper}>
        {items.map((item, i) => (
          <div key={i} style={styles.fadeSlide(i === index)}>
            {renderSlide(item)}
          </div>
        ))}
      </div>

      {showDots && (
        <div style={styles.dots}>
          {items.map((_, i) => (
            <div
              key={i}
              onClick={() => setIndex(i)}
              style={styles.dot(i === index)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;
