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
      isActive ? "sidebar-link-active" : "sidebar-link"
    }`;

  return (
    <>
      {/* Sidebar-specific styles for dark theme */}
      <style>{`
        .sidebar-link {
          position: relative;
          color: var(--elec-text-muted);
          transition: all 250ms ease;
        }
        .sidebar-link:hover {
          background: rgba(255,255,255,0.04);
          transform: translateX(4px);
          color: var(--elec-text);
        }
        .sidebar-link-active {
          background: rgba(0,210,255,0.08);
          border: 1px solid rgba(0,210,255,0.15);
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
          box-shadow: 0 0 10px var(--accent-cyan);
          animation: sidebar-glow 1.5s infinite alternate;
        }
        @keyframes sidebar-glow {
          from { box-shadow: 0 0 4px var(--accent-cyan); }
          to   { box-shadow: 0 0 14px var(--accent-cyan); }
        }
      `}</style>

      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden fixed top-20 left-4 z-40 w-11 h-11 flex items-center justify-center rounded-xl"
        style={{
          background: 'var(--elec-card)',
          border: '1px solid var(--elec-border)',
          color: 'var(--elec-text)',
          boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
        }}
      >
        <Menu size={22} />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed md:static inset-y-0 left-0 z-50 h-screen w-64 md:w-72 p-5 md:p-6 flex flex-col justify-between transform transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
        style={{
          background: 'var(--elec-surface)',
          borderRight: '1px solid var(--elec-border)',
        }}
      >
        <div>
          {/* Logo */}
          <div className="flex items-center justify-between mb-10 md:mb-12 px-2">
            <div className="flex items-center gap-2">
              <span
                className="led animate-led-pulse"
                style={{
                  background: 'var(--accent-cyan)',
                  color: 'var(--accent-cyan)',
                }}
              />
              <span
                className="font-extrabold text-lg md:text-xl tracking-tight uppercase"
                style={{ color: 'var(--elec-text)' }}
              >
                Electronics
              </span>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="md:hidden w-8 h-8 flex items-center justify-center rounded-lg"
              style={{
                background: 'rgba(255,255,255,0.05)',
                color: 'var(--elec-text-muted)',
              }}
            >
              <X size={18} />
            </button>
          </div>

          {/* Navigation */}
          <nav className="space-y-3 md:space-y-4">
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
        <div
          className="space-y-3 md:space-y-4 border-t pt-6 md:pt-8"
          style={{ borderColor: 'var(--elec-border)' }}
        >
          <button
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg font-mono text-xs font-bold uppercase hover:bg-white/5 transition-all"
            style={{ color: 'var(--elec-text-muted)' }}
          >
            <Settings size={16} />
            Settings
          </button>

          <button
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg font-mono text-xs font-bold uppercase hover:bg-red-500/10 transition-all"
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