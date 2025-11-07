<<<<<<< HEAD
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
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "16px",
      fontFamily: "sans-serif",
    },
    sectionTitle: {
      fontSize: "20px",
      fontWeight: 800,
      marginBottom: "8px",
      color: "#14532d",
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
    <div style={styles.page}>
      <h2 style={styles.sectionTitle}>Today's Best Offers</h2>
      <div style={styles.divider}></div>

      <Carousel
        items={offers}
        renderSlide={(item) => <SlideCard item={item} />}
        animation="fade"
        autoPlayMs={4500}
        showArrows
        showDots
      />
    </div>
  );
};

export default Home;
=======
import React from 'react'

export default function Home() {
  return (
    <div>
     Home Page will be Update soon....
    </div>
  )
}
>>>>>>> 610889ec22e3d62e7d9498c0821f289be27a611d
