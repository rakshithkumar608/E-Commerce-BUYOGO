import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutGrid,
  Layers,
  Sparkles,
  Smartphone,
  Laptop,
  Headphones,
  Gamepad2,
  Settings,
  LogOut,
  Package,
  Menu,
  X
} from "lucide-react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { to: "/electronics", label: "Main Electronics", icon: <LayoutGrid size={20} />, end: true },
    { to: "/electronics/collections", label: "Collections", icon: <Layers size={20} /> },
    { to: "/electronics/new-brands", label: "Tech Brands", icon: <Sparkles size={20} /> },
    { to: "/electronics/smartphones", label: "Smartphones", icon: <Smartphone size={20} /> },
    { to: "/electronics/laptops", label: "Laptops", icon: <Laptop size={20} /> },
    { to: "/electronics/audio", label: "Headphones", icon: <Headphones size={20} /> },
    { to: "/electronics/gaming", label: "Gaming", icon: <Gamepad2 size={20} /> },
    { to: "/electronics/orders", label: "My Orders", icon: <Package size={20} /> }
  ];

  const linkStyle = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 font-medium group ${
      isActive
        ? "bg-blue-500 text-white shadow-lg shadow-blue-500/30"
        : "text-gray-400 hover:bg-gray-800 hover:text-white"
    }`;

  return (
    <>
      {/* Mobile Toggle */}
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden fixed top-4 left-4 z-40 p-2 bg-gray-900 border border-gray-700 rounded-lg text-white"
      >
        <Menu size={24} />
      </button>

      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/70 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed md:static inset-y-0 left-0 z-50 h-screen w-72 bg-gray-950 border-r border-gray-800 p-6 flex flex-col justify-between transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div>
          {/* Logo */}
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/40">
                <span className="text-white font-bold text-lg">E</span>
              </div>

              <span className="text-white text-xl font-semibold tracking-wide">
                Electro.
              </span>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="md:hidden text-gray-400"
            >
              <X size={20} />
            </button>
          </div>

          {/* Navigation */}
          <nav className="space-y-2">
            <div className="text-xs text-gray-500 uppercase tracking-wider mb-2">
              Devices
            </div>

            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={linkStyle}
                onClick={() => setIsOpen(false)}
              >
                {item.icon}
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Bottom Section */}
        <div className="space-y-2 border-t border-gray-800 pt-6">
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-gray-800 hover:text-white">
            <Settings size={20} />
            Settings
          </button>

          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-400 hover:bg-red-500/20">
            <LogOut size={20} />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;