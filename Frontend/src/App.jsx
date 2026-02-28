import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import Lenis from "lenis";
import { Toaster } from "sonner";


import Login from "./auth/Login";
import Register from "./auth/Register";


import Dashboard from "./layouts/dashboard";


import FashionLayout from "./pages/Fashion/layout/FashionLayout";
import MainCollection from "./pages/Fashion/layout/MainCollection";
import Collections from "./pages/Fashion/layout/Collections";
import NewBrands from "./pages/Fashion/layout/NewBrands";
import MenCollection from "./pages/Fashion/layout/MenCollection";
import WomenCollection from "./pages/Fashion/layout/WomenCollection";
import StreetWear from "./pages/Fashion/layout/StreetWear";
import Accessories from "./pages/Fashion/layout/Accessories";

import Cart from "./cart/cart";


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


        <Route path="/fashion" element={<FashionLayout />}>

          <Route index element={<MainCollection />} />
          <Route path="collections" element={<Collections />} />
          <Route path="new-brands" element={<NewBrands />} />
          <Route path="men" element={<MenCollection />} />
          <Route path="women" element={<WomenCollection />} />
          <Route path="streetwear" element={<StreetWear />} />
          <Route path="accessories" element={<Accessories />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
};

export default App;