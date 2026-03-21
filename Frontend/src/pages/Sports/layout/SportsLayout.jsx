import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../../layouts/Navbar";
import Footer from "../../../layouts/Footer";
import Sidebar from "../Sidebar";
import SportsStyles from "../components/SportsStyles";

const SportsLayout = () => {
  return (
    <div className="flex flex-col min-h-screen" style={{ background: "#F0F0F0", color: "#121212" }}>
      <SportsStyles />
      <Navbar />

      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 bh-bg overflow-x-hidden">
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default SportsLayout;
