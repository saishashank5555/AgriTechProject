import React, { useEffect, useState } from "react";
import Carousel from "../Carousel/Carousel";
import SlideCard from "../Carousel/SlideCard";
import { getOffers } from "../api/apiClient";

const Home = () => {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    (async () => {
      const o = await getOffers();
      setOffers(o);
    })();
  }, []);

  const styles = {
    page: {
      maxWidth: "100%",
      margin: "0 auto",
      padding: "16px",
      fontFamily: "sans-serif",
    },
    title: {
      fontSize: "14px",
      fontWeight: "800",
      color: "#14532d",
      marginBottom: "6px",
    },
    divider: {
      width: "60px",
      height: "4px",
      background: "#22c55e",
      borderRadius: "999px",
      marginBottom: "18px",
    },
  };

  return (
    // <div style={styles.page}>
    
      <Carousel
        items={offers}
        renderSlide={(item) => <SlideCard item={item} />}
        animation="fade"
        autoPlayMs={4500}
        showDots={true}
      />
    // </div>
  );
};

export default Home;
