import seedsData from "../VegetableSeeds/seedsData";
import fertilizersData from "../Fertilizers/fertilizersData";
import machineryData from "../FarmMachinery/machineryData";

// Normalize function to attach category + rating fallback
const normalize = (data, category) =>
  data.map((item) => ({
    ...item,
    category,
    rating: item.rating || 4.0,
  }));

// Merge all items
let bestSellingAll = [
  ...normalize(seedsData, "seeds"),
  ...normalize(fertilizersData, "fertilizers"),
  ...normalize(machineryData, "machinery"),
];

// Sort by rating ↓ (best first)
bestSellingAll = bestSellingAll.sort((a, b) => b.rating - a.rating);

// Get top items for preview
export const getBestSelling = (limit = 6) => bestSellingAll.slice(0, limit);

// Get full list
export const getAllBestSelling = () => bestSellingAll;

export default bestSellingAll;
