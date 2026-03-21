import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../../layouts/Navbar";
import Footer from "../../../layouts/Footer";
import Sidebar from "../Sidebar";
import StoreStyles from "../components/StoreStyles";

const StoreLayout = () => {
  return (
    <div
      className="flex flex-col min-h-screen"
      style={{ background: "#030304", color: "#fff" }}
    >
      <StoreStyles />
      <Navbar />

      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 store-bg overflow-x-hidden">
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default StoreLayout;
