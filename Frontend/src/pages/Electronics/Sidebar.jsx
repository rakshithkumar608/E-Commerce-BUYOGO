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
    `flex items-center gap-3 px-4 py-4 rounded-xl font-mono text-xs font-bold tracking-widest uppercase transition-all duration-250 ${
      isActive
        ? "sidebar-link-active"
        : "sidebar-link"
    }`;

  return (
    <>
      {/* Sidebar-specific styles (not duplicating global theme) */}
      <style>{`
        .sidebar-link {
          position: relative;
          color: var(--text-muted);
          transition: all 250ms ease;
        }
        .sidebar-link:hover {
          background: linear-gradient(145deg, #e8edf5, #d1d9e6);
          box-shadow: var(--shadow-card);
          transform: translateX(4px);
          color: var(--text-primary);
        }
        .sidebar-link-active {
          background: linear-gradient(145deg, #e8edf5, #d1d9e6);
          box-shadow: var(--shadow-recessed);
          color: var(--accent-cyan) !important;
          transform: translateX(6px) scale(1.02);
          position: relative;
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
          background: linear-gradient(180deg, var(--accent-cyan), #00a8ff);
          box-shadow: 0 0 8px var(--accent-cyan);
          animation: sidebar-glow 1.5s infinite alternate;
        }
        @keyframes sidebar-glow {
          from { box-shadow: 0 0 4px var(--accent-cyan); }
          to   { box-shadow: 0 0 12px var(--accent-cyan); }
        }
      `}</style>

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
        className={`fixed md:static inset-y-0 left-0 z-50 h-screen w-72 industrial-bg border-r p-6 flex flex-col justify-between transform transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
        style={{ borderColor: '#babecc' }}
      >
        <div>
          {/* Logo */}
          <div className="flex items-center justify-between mb-12 px-2">
            <div className="flex items-center gap-2">
              <span
                className="led animate-led-pulse"
                style={{
                  background: 'var(--accent-cyan)',
                  color: 'var(--accent-cyan)',
                }}
              />
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
        <div className="space-y-4 border-t pt-8" style={{ borderColor: '#babecc' }}>
          <button
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg font-mono text-xs font-bold uppercase hover:shadow-md transition-all"
            style={{ color: 'var(--text-muted)' }}
          >
            <Settings size={16} />
            Settings
          </button>

          <button
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg font-mono text-xs font-bold uppercase hover:shadow-inner transition-all"
            style={{ color: 'var(--accent-red)' }}
          >
            <LogOut size={16} />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;