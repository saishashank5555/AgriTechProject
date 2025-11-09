import React from "react";
import HeroBannerSlider from "../HeroBannerSlider/HeroBannerSlider";
import CategoryGrid from "../CategoryGrid/CategoryGrid";
import VegetableSeeds from "../VegetableSeeds/VegetableSeeds";
import VegetableSeedsPreview from "../VegetableSeeds/VegetableSeedsPreview";   
import FertilizersPreview from "../Fertilizers/FertilizersPreview"; 
import FarmMachineryPreview from "../FarmMachinery/FarmMachineryPreview";
import OffersPreview from "../Offers/OffersPreview";
import BestSellingPreview from "../BestSelling/BestSellingPreview";
import ExclusiveGrid from "../Exclusive/ExclusiveGrid";
import TrustBanner from "../Banner/TrustBanner";
import TrustBanner2 from "../Banner/TrustBanner2";
import Brands from "../Brands/Brands";
import OffersPage from "../Offers/OffersPage";
import Footer from "../Footer/Footer";
import TrustSection from "../Banner/TrustSection";


const Home = () => {
  return (
    <div>
      <HeroBannerSlider />
      {/* Add other sections below */}
      <CategoryGrid />
      {/* <VegetableSeeds /> */}
      <OffersPreview />
      {/* <OffersPage></OffersPage> */}
      <BestSellingPreview />
      <VegetableSeedsPreview />
      <Brands />
      <FertilizersPreview />
      {/* <TrustBanner />
      <TrustBanner2 /> */}
      <TrustSection />
      <FarmMachineryPreview />
 
      <ExclusiveGrid />
      <Footer></Footer>
      
    </div>
  );
};

export default Home;
