import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import Lenis from "lenis";
import { Toaster } from "sonner";

// Auth 
import Login from "./auth/Login";
import Register from "./auth/Register";

// Dashboard
import Dashboard from "./layouts/dashboard";


// Fashion
import FashionLayout from "./pages/Fashion/layout/FashionLayout";
import MainCollection from "./pages/Fashion/layout/MainCollection";
import Collections from "./pages/Fashion/layout/Collections";
import NewBrands from "./pages/Fashion/layout/NewBrands";
import MenCollection from "./pages/Fashion/layout/MenCollection";
import WomenCollection from "./pages/Fashion/layout/WomenCollection";
import StreetWear from "./pages/Fashion/layout/StreetWear";
import Accessories from "./pages/Fashion/layout/Accessories";

// Cart Section
import Cart from "./cart/cart";
import CheckoutPage from "./cart/CheckoutPage";
import MyOrders from "./order/MyOrders";
import AdminPage from "./admin/AdminPage";

// Electronics
import ElectronicsLayouts from "./pages/Electronics/layout/ElectronicsLayouts";
import TrendingElectronics from "./pages/Electronics/layout/TrendingElectronics";
import TopCategories from "./pages/Electronics/layout/TopCategories";
import Smartphones from "./pages/Electronics/layout/Smartphones";
import Laptops from "./pages/Electronics/layout/Laptops";
import Headphones from "./pages/Electronics/layout/Headphones";
import CameraSection from "./pages/Electronics/layout/CameraSection";

// Store
import StoreLayout from "./pages/Store/layout/StoreLayout";
import MainStore from "./pages/Store/layout/MainStore";
import MenSection from "./pages/Store/layout/MenSection";
import WomenSection from "./pages/Store/layout/WomenSection";
import StreetWearSection from "./pages/Store/layout/StreetWearSection";
import AccessoriesSection from "./pages/Store/layout/AccessoriesSection";
import ElectronicsSection from "./pages/Store/layout/ElectronicsSection";
import DealsSection from "./pages/Store/layout/DealsSection";


const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <BrowserRouter>
      <Toaster position="top-right" richColors />
      <Routes>

       
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

       
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/admin" element={<AdminPage />} />

        {/* Fashion Section */}
        <Route path="/fashion" element={<FashionLayout />}>

          <Route index element={<MainCollection />} />
          <Route path="collections" element={<Collections />} />
          <Route path="new-brands" element={<NewBrands />} />
          <Route path="men" element={<MenCollection />} />
          <Route path="women" element={<WomenCollection />} />
          <Route path="streetwear" element={<StreetWear />} />
          <Route path="accessories" element={<Accessories />} />
          <Route path="orders" element={<MyOrders />} />

        </Route>

        {/* Electronics Section */}

        <Route path="/electronics" element={<ElectronicsLayouts />}>
        <Route index element={<TopCategories />}/>
        <Route path="trending" element={<TrendingElectronics />}/>
        <Route path="smartphones" element={<Smartphones />}/>
        <Route path="laptops" element={<Laptops />}/>
        <Route path="headphones" element={<Headphones />}/>
        <Route path="cameras" element={<CameraSection/>}/>
        </Route>

        {/* Store Section */}
        <Route path="/store" element={<StoreLayout />}>
          <Route index element={<MainStore />} />
          <Route path="men" element={<MenSection />} />
          <Route path="women" element={<WomenSection />} />
          <Route path="streetwear" element={<StreetWearSection />} />
          <Route path="accessories" element={<AccessoriesSection />} />
          <Route path="electronics" element={<ElectronicsSection />} />
          <Route path="deals" element={<DealsSection />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
};

export default App;