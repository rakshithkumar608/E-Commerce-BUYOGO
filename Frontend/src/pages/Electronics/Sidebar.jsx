import React, { useState } from "react";
import {
  Flame,
  Camera,
  Headphones,
  Laptop,
  Phone,
  LayoutGrid,
  Settings,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const IndustrialStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@500;700&display=swap');

    :root {
      --chassis: #e0e5ec;
      --panel: #f0f2f5;
      --text-primary: #2d3436;
      --text-muted: #6b7280;
      --accent-orange: #ff4757;
      --accent-cyan: #00d2ff;

      --shadow-card: 8px 8px 16px #babecc, -8px -8px 16px #ffffff;
      --shadow-pressed: inset 6px 6px 12px #babecc, inset -6px -6px 12px #ffffff;
      --shadow-recessed: inset 4px 4px 8px #babecc, inset -4px -4px 8px #ffffff;
    }

    body {
      background-color: var(--chassis);
      font-family: 'Inter', sans-serif;
    }

    .font-mono {
      font-family: 'JetBrains Mono', monospace;
    }

    .industrial-bg {
      background-color: var(--chassis);
    }

    .industrial-panel {
      background: var(--chassis);
      box-shadow: var(--shadow-card);
      border-radius: 14px;
    }

    .sidebar-link {
      position: relative;
      transition: all 250ms ease;
    }

    .sidebar-link:hover {
      background: linear-gradient(145deg,#e8edf5,#d1d9e6);
      box-shadow: var(--shadow-card);
      transform: translateX(4px);
    }

    .sidebar-link-active {
      background: linear-gradient(145deg,#e8edf5,#d1d9e6);
      box-shadow: var(--shadow-recessed);
      color: var(--accent-cyan) !important;
      transform: translateX(6px) scale(1.02);
    }

    .sidebar-link-active span {
      color: var(--accent-cyan);
      transform: scale(1.15);
    }

    .sidebar-link-active::before {
      content: "";
      position: absolute;
      left: -6px;
      top: 50%;
      transform: translateY(-50%);
      width: 4px;
      height: 60%;
      border-radius: 3px;
      background: linear-gradient(
        180deg,
        var(--accent-cyan),
        #00a8ff
      );
      box-shadow: 0 0 8px var(--accent-cyan);
      animation: sidebar-glow 1.5s infinite alternate;
    }

    @keyframes sidebar-glow {
      from { box-shadow: 0 0 4px var(--accent-cyan); }
      to { box-shadow: 0 0 12px var(--accent-cyan); }
    }

    .led {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      box-shadow: 0 0 8px currentColor;
    }

    .animate-led {
      animation: led-pulse 2s infinite;
    }

    @keyframes led-pulse {
      0%,100% { opacity:1; }
      50% { opacity:0.5; }
    }
  `}</style>
);

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { to: "/electronics", label: "Top Categories", icon: <LayoutGrid size={20} />, end: true },
    { to: "/electronics/trending", label: "Trending", icon: <Flame size={20} /> },
    { to: "/electronics/smartphones", label: "Smartphones", icon: <Phone size={20} /> },
    { to: "/electronics/laptops", label: "Laptops", icon: <Laptop size={20} /> },
    { to: "/electronics/headphones", label: "Headphones", icon: <Headphones size={20} /> },
    { to: "/electronics/cameras", label: "Cameras", icon: <Camera size={20} /> },
  ];

  const linkStyle = ({ isActive }) =>
    `sidebar-link flex items-center gap-3 px-4 py-4 rounded-xl font-mono text-xs font-bold tracking-widest uppercase ${
      isActive
        ? "sidebar-link-active"
        : "text-text-muted hover:text-text-primary"
    }`;

  return (
    <>
      <IndustrialStyles />

      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden fixed top-6 left-6 z-40 w-12 h-12 flex items-center justify-center industrial-panel"
      >
        <Menu size={24} />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed md:static inset-y-0 left-0 z-50 h-screen w-72 industrial-bg border-r border-[#babecc] p-6 flex flex-col justify-between transform transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div>
          {/* Logo */}
          <div className="flex items-center justify-between mb-12 px-2">
            <div className="flex items-center gap-2">
              <span className="led bg-[#00d2ff] text-[#00d2ff] animate-led"></span>
              <span className="font-extrabold text-xl tracking-tight uppercase">
                Electronics
              </span>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="md:hidden w-8 h-8 flex items-center justify-center rounded-lg shadow-inner"
            >
              <X size={18} />
            </button>
          </div>

          {/* Navigation */}
          <nav className="space-y-4">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={linkStyle}
                onClick={() => setIsOpen(false)}
              >
                <span className="transition-transform duration-300">
                  {item.icon}
                </span>
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Bottom buttons */}
        <div className="space-y-4 border-t border-[#babecc] pt-8">
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg font-mono text-xs font-bold uppercase text-text-muted hover:shadow-md transition-all">
            <Settings size={16} />
            Settings
          </button>

          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg font-mono text-xs font-bold uppercase text-accent-orange hover:shadow-inner transition-all">
            <LogOut size={16} />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;