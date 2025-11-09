import seedsData from "../VegetableSeeds/seedsData";
import fertilizersData from "../Fertilizers/fertilizersData";
import machineryData from "../FarmMachinery/machineryData";

// normalize + add category label
const normalize = (data, category) =>
  data.map((item) => ({
    ...item,
    category,
    discountPercent: Math.round(((item.mrp - item.price) / item.mrp) * 100),
  }));

// MERGE ALL PRODUCT TYPES
const offersAll = [
  ...normalize(seedsData, "seeds"),
  ...normalize(fertilizersData, "fertilizers"),
  ...normalize(machineryData, "machinery"),
];

// Only show real offers (at least 10% off)
export const getTodayOffers = (limit = 6) =>
  offersAll
    .filter((i) => i.discountPercent >= 10)
    .sort((a, b) => b.discountPercent - a.discountPercent)
    .slice(0, limit);

export const getAllOffers = () =>
  offersAll.filter((i) => i.discountPercent >= 10);

export default offersAll;
