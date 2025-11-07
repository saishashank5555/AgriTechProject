import React from "react";
import DashboardNavbar from "./DashboardNavbar";
import Footer from "../../Footer";
import { Outlet } from "react-router-dom";
import { CartProvider } from "./CartContext";
import "./UserDashboard.css";

const DashboardLayout = () => {
  return (
    <CartProvider>
      <div className="ud-layout">
        <DashboardNavbar />
        <div className="ud-main">
          <Outlet />
        </div>
        <Footer />
      </div>
    </CartProvider>
  );
};

export default DashboardLayout;
