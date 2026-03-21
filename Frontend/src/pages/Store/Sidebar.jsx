import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Store,
  User,
  Users,
  Shirt,
  ShoppingBasket,
  Zap,
  Cpu,
  Tag,
  Menu,
  X,
  Settings,
  LogOut,
} from "lucide-react";

const navItems = [
  {
    to: "/store",
    label: "All Items",
    icon: <Store size={16} />,
    end: true,
  },
  {
    to: "/store/men",
    label: "Men",
    icon: <User size={16} />,
  },
  {
    to: "/store/women",
    label: "Women",
    icon: <Users size={16} />,
  },
  {
    to: "/store/streetwear",
    label: "Streetwear",
    icon: <Shirt size={16} />,
  },
  {
    to: "/store/accessories",
    label: "Accessories",
    icon: <ShoppingBasket size={16} />,
  },
  {
    to: "/store/electronics",
    label: "Electronics",
    icon: <Cpu size={16} />,
  },
  {
    to: "/store/deals",
    label: "Flash Deals",
    icon: <Tag size={16} />,
  },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `store-nav-link ${isActive ? "store-nav-link-active" : ""}`;

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden fixed top-5 left-5 z-40 w-11 h-11 flex items-center justify-center rounded-xl"
        style={{
          background: "#0F1115",
          border: "1px solid rgba(247,147,26,0.3)",
          color: "#F7931A",
          boxShadow: "0 0 12px rgba(247,147,26,0.2)",
        }}
      >
        <Menu size={20} />
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`store-sidebar fixed md:static inset-y-0 left-0 z-50 h-screen w-72 p-6 flex flex-col justify-between overflow-y-auto transform transition-transform duration-400 ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        {/* Top: Logo + Nav */}
        <div>
          {/* Logo */}
          <div className="flex items-center justify-between mb-10 px-1">
            <div className="flex items-center gap-3">
              {/* Pulsing LED */}
              <div className="relative w-3 h-3 flex-shrink-0">
                <div
                  className="store-ping"
                  style={{ background: "#F7931A", opacity: 0.4 }}
                />
                <div
                  className="relative w-3 h-3 rounded-full"
                  style={{
                    background: "#F7931A",
                    boxShadow: "0 0 10px #F7931A",
                  }}
                />
              </div>
              <div>
                <span
                  className="font-heading font-bold text-lg tracking-tight text-white"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  BUYOGO
                </span>
                <p
                  className="font-mono text-[9px] uppercase tracking-widest"
                  style={{ color: "var(--muted)" }}
                >
                  Store v2.0
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="md:hidden w-8 h-8 flex items-center justify-center rounded-lg"
              style={{ color: "var(--muted)", background: "rgba(255,255,255,0.05)" }}
            >
              <X size={16} />
            </button>
          </div>

          {/* Nav label */}
          <p
            className="font-mono text-[9px] uppercase tracking-[0.2em] mb-4 px-2"
            style={{ color: "var(--muted)" }}
          >
            Navigation
          </p>

          {/* Nav links */}
          <nav className="space-y-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={linkClass}
                onClick={() => setIsOpen(false)}
              >
                <div className="store-nav-icon">
                  {item.icon}
                </div>
                <span>{item.label}</span>
              </NavLink>
            ))}
          </nav>

          {/* Separator */}
          <div
            className="my-8 h-px"
            style={{ background: "rgba(255,255,255,0.06)" }}
          />

          {/* Pro badge */}
          <div
            className="rounded-xl p-4 relative overflow-hidden"
            style={{
              background: "rgba(247,147,26,0.06)",
              border: "1px solid rgba(247,147,26,0.15)",
            }}
          >
            <div
              className="absolute top-2 right-2 w-12 h-12 rounded-full opacity-20"
              style={{ background: "#F7931A", filter: "blur(16px)" }}
            />
            <div
              className="store-badge mb-2"
              style={{ fontSize: "9px" }}
            >
              <Zap size={9} fill="currentColor" />
              Premium
            </div>
            <p
              className="font-heading font-semibold text-sm text-white mb-1"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Unlock All Access
            </p>
            <p
              className="font-mono text-[10px]"
              style={{ color: "var(--muted)" }}
            >
              Exclusive drops &amp; early access
            </p>
          </div>
        </div>

        {/* Bottom: Settings / Logout */}
        <div
          className="pt-6 space-y-1"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <button
            className="store-nav-link w-full text-left"
            style={{ color: "var(--muted)", borderRadius: "12px" }}
          >
            <div className="store-nav-icon">
              <Settings size={15} />
            </div>
            Settings
          </button>
          <button
            className="store-nav-link w-full text-left"
            style={{ color: "#f87171", borderRadius: "12px" }}
          >
            <div
              className="store-nav-icon"
              style={{
                background: "rgba(248,113,113,0.15)",
                borderColor: "rgba(248,113,113,0.3)",
              }}
            >
              <LogOut size={15} />
            </div>
            Logout
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
