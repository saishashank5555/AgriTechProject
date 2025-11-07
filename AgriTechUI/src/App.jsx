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


        <Route path="/userdashboard/*" element={<DashboardLayout />}>
          <Route index element={<ProductList />} />
          {/* Future nested routes:
              <Route path="cart" element={<Cart />} />
              <Route path="wishlist" element={<Wishlist />} />
              <Route path="settings" element={<UserSettings />} /> 
          */}
        </Route>

       </Routes>
       {/* <Footer/> */}
    </Router>
  );
}

export default App;