import React from "react";

const SlideCard = ({ item, variant = "offer" }) => {
  const styles = {
    offer: {
      position: "relative",
      height: "100%",
      width: "100%",
      borderRadius: "14px",
      overflow: "hidden",
    },
    offerImg: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
    offerText: {
      position: "absolute",
      bottom: "16px",
      left: "16px",
      color: "white",
      fontWeight: 700,
      fontSize: "clamp(14px, 2vw, 22px)",
      textShadow: "0 2px 8px rgba(0,0,0,0.7)",
    },
  };

  return (
    <div style={styles.offer}>
      <img src={item.imageUrl} alt="" style={styles.offerImg} />
      <div style={styles.offerText}>{item.title}</div>
    </div>
  );
};

export default SlideCard;
