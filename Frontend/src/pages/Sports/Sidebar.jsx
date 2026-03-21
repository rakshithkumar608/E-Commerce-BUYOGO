import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutGrid,
  Zap,
  Dumbbell,
  Mountain,
  Trophy,
  Heart,
  Tag,
  Menu,
  X,
  Settings,
  LogOut,
} from "lucide-react";

const navItems = [
  { to: "/sports", label: "All Sports", icon: <LayoutGrid size={14} />, end: true, shape: "circle", color: "#D02020" },
  { to: "/sports/running", label: "Running", icon: <Zap size={14} />, shape: "square", color: "#1040C0" },
  { to: "/sports/gym", label: "Gym", icon: <Dumbbell size={14} />, shape: "rotated", color: "#F0C020" },
  { to: "/sports/outdoor", label: "Outdoor", icon: <Mountain size={14} />, shape: "circle", color: "#D02020" },
  { to: "/sports/team-sports", label: "Team Sports", icon: <Trophy size={14} />, shape: "square", color: "#1040C0" },
  { to: "/sports/yoga", label: "Yoga", icon: <Heart size={14} />, shape: "rotated", color: "#F0C020" },
  { to: "/sports/deals", label: "Flash Deals", icon: <Tag size={14} />, shape: "circle", color: "#D02020" },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `bh-nav-link ${isActive ? "bh-nav-link-active" : ""}`;

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden fixed top-5 left-5 z-40 w-11 h-11 flex items-center justify-center"
        style={{
          background: "#F0F0F0",
          border: "2px solid #121212",
          boxShadow: "3px 3px 0px 0px #121212",
          color: "#121212",
        }}
      >
        <Menu size={20} />
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/40 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`bh-sidebar fixed md:static inset-y-0 left-0 z-50 h-screen w-72 p-6 flex flex-col justify-between overflow-y-auto transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div>
          {/* Logo */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              {/* Geometric Bauhaus logo: circle, square, triangle */}
              <div className="flex items-center gap-1">
                <div className="w-4 h-4 rounded-full bg-[#D02020] border-2 border-black" />
                <div className="w-4 h-4 bg-[#1040C0] border-2 border-black" />
                <div
                  className="w-0 h-0"
                  style={{
                    borderLeft: "8px solid transparent",
                    borderRight: "8px solid transparent",
                    borderBottom: "14px solid #F0C020",
                  }}
                />
              </div>
              <div>
                <span className="font-black text-lg uppercase tracking-tighter">
                  Sports
                </span>
                <p className="text-[9px] font-bold uppercase tracking-[0.25em]" style={{ color: "#888" }}>
                  Bauhaus Edition
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="md:hidden w-8 h-8 flex items-center justify-center border-2 border-black"
            >
              <X size={14} />
            </button>
          </div>

          {/* Section label */}
          <p className="text-[9px] font-bold uppercase tracking-[0.25em] mb-3 px-2" style={{ color: "#999" }}>
            Categories
          </p>

          {/* Nav */}
          <nav className="space-y-1.5">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={linkClass}
                onClick={() => setIsOpen(false)}
              >
                <div
                  className="bh-nav-shape"
                  style={{
                    background: item.color,
                    borderRadius: item.shape === "circle" ? "50%" : "0",
                    transform: item.shape === "rotated" ? "rotate(45deg)" : "none",
                  }}
                >
                  <span style={{ transform: item.shape === "rotated" ? "rotate(-45deg)" : "none", display: "flex" }}>
                    {item.icon}
                  </span>
                </div>
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Divider */}
          <div className="my-6 border-t-4 border-black" />

          {/* Promo */}
          <div
            className="p-4 relative overflow-hidden"
            style={{
              background: "#F0C020",
              border: "2px solid #121212",
              boxShadow: "4px 4px 0px 0px #121212",
            }}
          >
            {/* Decorative circle */}
            <div
              className="absolute -top-4 -right-4 w-16 h-16 rounded-full opacity-30"
              style={{ background: "#D02020" }}
            />
            <p className="font-black text-sm uppercase tracking-tight relative z-10">
              Season Sale
            </p>
            <p className="text-[10px] font-medium mt-1 relative z-10" style={{ color: "#444" }}>
              Up to 30% off on selected gear
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-4 border-t-4 border-black space-y-1.5">
          <button className="bh-nav-link w-full text-left">
            <div className="bh-nav-shape bg-[#E0E0E0]" style={{ borderRadius: 0 }}>
              <Settings size={13} />
            </div>
            Settings
          </button>
          <button className="bh-nav-link w-full text-left" style={{ color: "#D02020" }}>
            <div className="bh-nav-shape" style={{ background: "#D02020", borderRadius: 0, color: "white" }}>
              <LogOut size={13} />
            </div>
            Logout
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
