import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";
import Navbar from "../../../layouts/Navbar";
import Footer from "../../../layouts/Footer";

const FashionLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Navbar */}
      <Navbar />

      {/* Middle Section */}
      <div className="flex flex-1">

        {/* Sidebar */}
        <Sidebar />

        {/* Dynamic Content */}
        <div className="flex-1 p-6 bg-gray-100">
          <Outlet />
        </div>

      </div>

      {/* Footer */}
      <Footer />

    </div>
  );
};

export default FashionLayout;