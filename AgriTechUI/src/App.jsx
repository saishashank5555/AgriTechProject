import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Home from "./components/pages/Home";
import Contactus from "./components/pages/Contactus";
import DashboardLayout from "./components/Dashboard/UserDashboard/DashboardLayout";
import ProductList from "./components/Dashboard/UserDashboard/ProductList";
import Services from "./components/pages/Services";
import About from "./components/pages/About";
import Footer from "./components/Footer";
import VegetableSeedsPage from "./components/VegetableSeeds/VegetableSeedsPage";
import SeedDetailsPage from "./components/VegetableSeeds/SeedDetailsPage";
import FertilizersPage from "./components/Fertilizers/FertilizersPage";
import FarmMachineryPage from "./components/FarmMachinery/FarmMachineryPage";
import OffersPage from "./components/Offers/OffersPage";
import BestSellingPage from "./components/BestSelling/BestSellingPage";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />

        {/* Vegetable Seeds Full Page Route */}
        <Route path="/category/vegetable-seeds" element={<VegetableSeedsPage />} />
        <Route path="/seeds/:id" element={<SeedDetailsPage />} />
        <Route path="/category/fertilizers" element={<FertilizersPage />} />
        <Route path="/category/farm-machinery" element={<FarmMachineryPage />} />
        <Route path="/offers-today" element={<OffersPage />} />
        <Route path="/best-selling" element={<BestSellingPage />} />

        {/* User Dashboard Nested Routes */}
        <Route path="/userdashboard/*" element={<DashboardLayout />}>
          <Route index element={<ProductList />} />
        </Route>

      </Routes>

    </Router>
  );
}

export default App;
